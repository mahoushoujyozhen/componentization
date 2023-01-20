package service

import (
	"backend/cmn"
	"backend/zap_log"
	"fmt"
	"net/http"
)

//go:generate go run service-enroll-generate.go -a=annotation:(?P<name>.*)-service

func WebServe(w http.ResponseWriter, r *http.Request) {
	log := zap_log.Log
	fmt.Println("Component enroll success!")
	//解决跨域
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Method", "GET,POST,PUT,DELETE,OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}
	log.Info("service get a request")
	//路由服务分发
	cmn.Services[r.URL.Path].Fn(w, r)
}
