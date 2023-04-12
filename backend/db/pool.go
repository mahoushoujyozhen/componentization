package db

import (
	"backend/zap_log"
	"context"
	"fmt"
	"github.com/gomodule/redigo/redis"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/spf13/viper"
	"time"
)

var (
	Pool      *pgxpool.Pool
	redisPool *redis.Pool
)

func CreateDBPool() {
	var log = zap_log.Log
	viper.SetConfigName(".configure_linux") // name of config file (without extension)
	viper.SetConfigType("json")
	viper.AddConfigPath(".")
	if err := viper.ReadInConfig(); err != nil {
		if _, ok := err.(viper.ConfigFileNotFoundError); ok {
			// Config file not found; ignore error if desired
			log.Error(".configure_linux was not found")
			return
		} else {
			// Config file was found but another error was produced
			log.Error(fmt.Sprintf("fatal error config file: %w", err))
			return
		}
	}
	//get value from .configure_linux.json
	dbPort := viper.GetString("db_postgres.port")
	dbAddr := viper.GetString("db_postgres.address")
	dbUser := viper.GetString("db_postgres.user")
	dbPw := viper.GetString("db_postgres.pw")
	dbName := viper.GetString("db_postgres.db_name")
	config, err := pgxpool.ParseConfig(fmt.Sprintf("postgres://%s:%s@%s:%s/%s?sslmode=disable&pool_max_conns=50", dbUser, dbPw, dbAddr, dbPort, dbName))
	//config, err := pgxpool.ParseConfig(fmt.Sprintf("postgres://postgres:huangzhen123@localhost:5432/newdb?sslmode=disable&pool_max_conns=50"))

	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		return
	}
	Pool, err = pgxpool.NewWithConfig(context.Background(), config)
	if err != nil {
		log.Error("DB pool create failed !")
		fmt.Println("DB pool init failed &&&&&")
		return
	}
	log.Info("DB pool create success")
}

func GetDBConn() (*pgxpool.Conn, error) {
	return Pool.Acquire(context.Background())
}

func Close(conn *pgxpool.Conn) {
	conn.Release()
}

func redisConnInit() {
	log := zap_log.Log
	if redisPool == nil {
		return
	}
	host := "localhost"
	port := 6379
	pw := "123456"
	var s string
	s = "db_redis.address"
	if viper.IsSet(s) {
		host = viper.GetString(s)
	}

	s = "db_redis.port"
	if viper.IsSet(s) {
		port = viper.GetInt(s)
	}
	s = "db_redis.pw"
	if viper.IsSet(s) {
		pw = viper.GetString(s)
	}
	//Test
	fmt.Println(host)
	fmt.Println(port)
	fmt.Println(pw)

	serv := fmt.Sprintf("%s:%d", host, port)
	log.Info(fmt.Sprintf("connecting redis to %s", serv))

	redisPool = &redis.Pool{
		MaxIdle:     32,
		IdleTimeout: 60 * time.Minute,
		Dial: func() (conn redis.Conn, err error) {
			for {
				conn, err = redis.Dial("tcp", serv)
				if err != nil {
					log.Error(err.Error())
					<-time.After(time.Second * 15)
					continue
				}
				_, err = conn.Do("AUTH", pw)
				if err != nil {
					log.Error(err.Error())
					<-time.After(time.Second * 15)
					continue
				}
				log.Info(fmt.Sprintf("redis connected with :%s", serv))

				if viper.IsSet("db_redis.init") {
					cleanCache := viper.GetBool("db_redis.init")
					if cleanCache {
						_, err = conn.Do("flushdb")
						if err != nil {
							log.Error(err.Error())
							return
						}
						log.Info("successfully clean up redis db")
						defer diableNextFlushDB()
					}
				}
				break
			}
			return
		},
		TestOnBorrow: func(c redis.Conn, t time.Time) error {
			_, err := c.Do("PING")
			return err
		},
	}
	conn := redisPool.Get()
	_, err := conn.Do("INFO")
	if err != nil {
		log.Error(err.Error())
	}
	log.Info(fmt.Sprintf("connect with redis :%s\n", serv))
}

func diableNextFlushDB() {
	err := JsonWrite(viper.ConfigFileUsed(), "dbms.redis.init", false)
	if err != nil {
		D.Error(err.Error())
		return
	}
}
