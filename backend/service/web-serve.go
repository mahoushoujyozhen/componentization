package service

import (
	"backend/cmn"
	"fmt"
	"go.uber.org/zap"
	"net/http"
)

//go:generate go run service-enroll-generate.go -a=annotation:(?P<name>.*)-service

var (
	z *zap.Logger
)

func init() {
	z = cmn.GetLogger()
}
func WebServe(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Component enroll success!")
	//解决跨域
	//注意，设置同源处理的时候，localhost和127.0.0.1要和前端保持一致，前端为127.0.0.1，所以这里使用127.0.0.1
	w.Header().Set("Access-Control-Allow-Origin", "http://127.0.0.1:5173")
	w.Header().Set("Access-Control-Allow-Method", "GET,POST,PUT,DELETE,OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.Header().Set("Access-Control-Allow-Credentials", "true")
	if r.Method == http.MethodOptions {
		w.WriteHeader(http.StatusOK)
		return
	}
	z.Info("service get a request")
	//路由服务分发
	cmn.Services[r.URL.Path].Fn(w, r)
}
