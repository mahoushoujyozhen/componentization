package login

//author: {"name":"login","email":"389403710@qq.com"}
//annotation:login-service

import (
	"backend/cmn"
	"backend/db"
	"backend/zap_log"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/jackc/pgx/v5"
	"net/http"
)

func Enroll(author string) {
	fmt.Println("login enroll call! ")
	var developer *cmn.ModuleAuthor
	if author != "" {
		var d cmn.ModuleAuthor
		err := json.Unmarshal([]byte(author), &d)
		if err != nil {
			//z.Error(err.Error())
			fmt.Println(err.Error())
			return
		}
		developer = &d
	}
	ep := cmn.ServeEndPoint{
		Fn:   login,
		Path: "/api/login",
		Name: "login",
	}
	err := cmn.AddService(&ep)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(developer)
}

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Println("login service")
	var req = cmn.ReplyProto{
		Status: 0,
		Msg:    "success",
	}
	log := zap_log.Log
	dbConn, err := db.GetDBConn()
	if err != nil {
		log.Error(fmt.Sprintf("err:%v", err))
		fmt.Println(err)
		req.Status = 566
		req.Msg = "db Pool has no conn"
		cmn.Resp(w, &req)
		return
	}
	defer db.Close(dbConn)
	//这里写业务函数

	var user cmn.User
	err = json.NewDecoder(r.Body).Decode(&user)
	fmt.Println(err)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}

	username := user.Username
	pw := user.Pw
	id := user.Id
	fmt.Println(username)
	fmt.Println(pw)
	fmt.Println(id)

	////register

	s := `SELECT id FROM usercst WHERE username = $1 and password = $2; `
	rs := dbConn.QueryRow(context.Background(), s, username, pw)
	err = rs.Scan(&id)
	if err != nil {

		//不存在，注册

		if errors.Is(err, pgx.ErrNoRows) {
			fmt.Println(123123123)
			s := `INSERT INTO usercst (username,password) VALUES ($1,$2); `
			_, err := dbConn.Exec(context.Background(), s, username, pw)
			if err != nil {
				log.Error(fmt.Sprintf("err: %s", err))
				req.Status = 550
				req.Msg = err.Error()
				cmn.Resp(w, &req)
				return
			}
			s = `SELECT id FROM usercst WHERE username = $1 and password = $2; `
			rs := dbConn.QueryRow(context.Background(), s, username, pw)
			err = rs.Scan(&id)
			if err != nil {
				log.Error(fmt.Sprintf("err: %s", err))
				req.Status = 560
				req.Msg = fmt.Sprintf("err: %s", err)
				cmn.Resp(w, &req)
				return
			}
			var reqUser = cmn.User{
				Id:       id,
				Username: username,
			}
			//req.Data = []byte(fmt.Sprintf(`{"id":%d,"username":"%s"}`, id, username))
			//req.Data = fmt.Sprintf(`{"id":1,"username":"2"}`)
			req.Data = reqUser
			req.Msg = "注册成功"
			cmn.Resp(w, &req)
			return
		}
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 560
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}

	//存在，则校验登录
	var reqUser = cmn.User{
		Id:       id,
		Username: username,
	}
	//	返回id
	//req.Data = fmt.Sprintf(`{"id":%d,"username":"%s"}`, id, username)
	//fmt.Println(string(req.Data))
	req.Data = reqUser
	req.Msg = "登录成功"
	cmn.Resp(w, &req)
	return

}
