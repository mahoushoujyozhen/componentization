package main

import (
	"backend/cmn"
	"backend/db"
	"backend/service"
	"fmt"
	"go.uber.org/zap"
	"net/http"
)

var ctx = map[string]interface{}{}
var (
	z *zap.Logger
)

func main() {
	fmt.Println("main run !!!")
	//register z
	z = cmn.GetLogger()
	//	viper read .configure_linux.json
	z.Info("hello main")
	//ctx[dbPort] = viper.GetString("db_postgres.port")

	db.CreateDBPool()
	//db.GetRedisConn()
	//xxxxxx
	//Enroll component
	service.Enroll()
	//service.WebServe: a gateway function
	http.HandleFunc("/api/", service.WebServe)

	//frontend static file service
	fs := http.FileServer(http.Dir("output/prerendered"))
	//http.Handle("/pages/", http.StripPrefix("/pages/", fs))
	http.Handle("/", http.StripPrefix("/", fs))

	////file static service
	fsFile := http.FileServer(http.Dir("static"))
	http.Handle("/src/static/", http.StripPrefix("/src/static/", fsFile))

	fsJs := http.FileServer(http.Dir("output/client"))
	http.Handle("/_app/", fsJs)
	http.ListenAndServe(":7070", nil)

}
