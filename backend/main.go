package main

import (
	"backend/db"
	"backend/service"
	"backend/zap_log"
	"fmt"
	"net/http"
)

var ctx = map[string]interface{}{}

func main() {
	fmt.Println("main run !!!")
	//register log
	zap_log.Init()
	log := zap_log.Log
	//	viper read .configure_linux.json
	log.Info("hello main")
	//ctx[dbPort] = viper.GetString("db_postgres.port")

	db.CreateDBPool()

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
