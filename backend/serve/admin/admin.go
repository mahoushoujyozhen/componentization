package admin

//author: {"name":"admin","email":"389403710@qq.com"}
//annotation:admin-service

import (
	"backend/cmn"
	"backend/db"
	"context"
	"encoding/json"
	"fmt"
	"go.uber.org/zap"
	"net/http"
)

var (
	z *zap.Logger
)

func init() {
	z = cmn.GetLogger()

}

type User struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Password string `json:"password,omitempty" `
}

func Enroll(author string) {
	fmt.Println("admin enroll call! ")
	var developer *cmn.ModuleAuthor
	if author != "" {
		var d cmn.ModuleAuthor
		err := json.Unmarshal([]byte(author), &d)
		if err != nil {
			fmt.Println(err.Error())
			return
		}
		developer = &d
	}

	err := cmn.AddService(&cmn.ServeEndPoint{
		Fn:   register,
		Path: "/api/admin/register",
		Name: "admin_register",
	})
	if err != nil {
		fmt.Println(err)
		return
	}
	err = cmn.AddService(&cmn.ServeEndPoint{
		Fn:   login,
		Path: "/api/admin/login",
		Name: "admin_login",
	})
	if err != nil {
		fmt.Println(err)
		return
	}
	err = cmn.AddService(&cmn.ServeEndPoint{
		Fn:   test,
		Path: "/api/admin/test",
		Name: "admin_test",
	})
	if err != nil {
		fmt.Println(err)
		return
	}
	err = cmn.AddService(&cmn.ServeEndPoint{
		Fn:   logout,
		Path: "/api/admin/logout",
		Name: "admin_logout",
	})
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(developer)
}

// TODO 注册
func register(w http.ResponseWriter, r *http.Request) {

	fmt.Println("admin_register service")
	req := cmn.ReplyProto{
		Status: 200,
		Msg:    "test call success",
	}
	admin := &User{

		Username: "ssss",
		Password: "dasfasdfasdfasdfasdf",
	}
	//err := json.NewDecoder(r.Body).Decode(&admin)
	//if err != nil {
	//	z.Error(err.Error())
	//	req.Msg = err.Error()
	//	req.Status = 777
	//	cmn.Resp(w, &req)
	//return
	//}

	//输出
	fmt.Println(admin.Id)
	fmt.Println(admin.Username)
	fmt.Println(admin.Password)

	//参数判空
	if admin.Username == "" || admin.Password == "" {
		req.Status = 777
		req.Msg = "parameter is empty"
		cmn.Resp(w, &req)
		return
	}

	//获取dbconn
	conn, err := db.GetDBConn()
	defer db.Close(conn)
	if err != nil {
		z.Error(err.Error())
		req.Msg = err.Error()
		req.Status = 777
		cmn.Resp(w, &req)
		return
	}

	//检查用户是否存在
	idTemp := 0
	md5Pw := cmn.Md5(admin.Password)
	s := `select admin_id from admin where username = $1 and pw = $2`
	res := conn.QueryRow(context.Background(), s, admin.Username, md5Pw)
	err = res.Scan(&idTemp)
	if err != nil {
		//不存在则注册
		s = `insert into admin(username,pw) VALUES ($1,$2)`
		_, err = conn.Exec(context.Background(), s, admin.Username, md5Pw)
		if err != nil {
			z.Error(err.Error())
			req.Msg = err.Error()
			req.Status = 556
			cmn.Resp(w, &req)
			return
		}
		req.Msg = "注册成功"
		cmn.Resp(w, &req)
		return
	}
	req.Status = 556
	req.Msg = "用户已存在，请勿重复注册"
	cmn.Resp(w, &req)
	return

}

//TODO 登录

func login(w http.ResponseWriter, r *http.Request) {
	fmt.Println("admin_login service")
	req := cmn.ReplyProto{
		Status: 200,
		Msg:    "login call success",
	}

	admin := &User{

		Username: "ssss",
		Password: "dasfasdfasdfasdfasdf",
	}
	//err := json.NewDecoder(r.Body).Decode(&admin)
	//if err != nil {
	//	z.Error(err.Error())
	//	req.Msg = err.Error()
	//	req.Status = 777
	//	cmn.Resp(w, &req)
	//return
	//}

	//输出
	fmt.Println(admin.Id)
	fmt.Println(admin.Username)
	fmt.Println(admin.Password)

	//参数判空
	if admin.Username == "" || admin.Password == "" {
		req.Status = 777
		req.Msg = "parameter is empty"
		cmn.Resp(w, &req)
		return
	}

	//获取dbconn
	conn, err := db.GetDBConn()
	defer db.Close(conn)
	if err != nil {
		z.Error(err.Error())
		req.Msg = err.Error()
		req.Status = 777
		cmn.Resp(w, &req)
		return
	}

	adminId := 0
	md5Pw := cmn.Md5(admin.Password)
	s := `select admin_id from admin where username = $1 and pw = $2;`
	err = conn.QueryRow(context.Background(), s, admin.Username, md5Pw).Scan(&adminId)
	if err != nil {
		z.Error(err.Error())
		req.Msg = err.Error()
		req.Status = 557
		cmn.Resp(w, &req)
		return
	}

	//登录成功，返回session
	session := cmn.GetSession(r)
	session.Values["userId"] = adminId
	session.Values["auth"] = true

	//底层调用了http.setCookie
	err = session.Save(r, w)
	if err != nil {
		z.Error(err.Error())
		req.Status = 551
		req.Msg = "Set Cookie err"
		cmn.Resp(w, &req)
		return
	}
	responseDate := cmn.User{
		Id:       adminId,
		Username: admin.Username,
	}
	req.Data = responseDate
	req.Msg = "登录成功"
	cmn.Resp(w, &req)
	return
}

// TODO 退出登录
func logout(w http.ResponseWriter, r *http.Request) {
	fmt.Println("admin_logout service")
	req := cmn.ReplyProto{
		Status: 200,
		Msg:    "login call success",
	}

	session := cmn.GetSession(r)
	//登录成功，返回session

	session.Values["auth"] = false
	//删除cookie
	session.Options.MaxAge = -1

	//底层调用了http.setCookie
	err := session.Save(r, w)
	if err != nil {
		z.Error(err.Error())
		req.Status = 551
		req.Msg = "Set Cookie err"
		cmn.Resp(w, &req)
		return
	}
	req.Msg = "退出登录成功"
	cmn.Resp(w, &req)
	return
}

func test(w http.ResponseWriter, r *http.Request) {
	//store := cmn.GetStore()
	fmt.Println("admin_login service")
	req := cmn.ReplyProto{
		Status: 200,
		Msg:    "login call success",
	}
	fmt.Println(cmn.Welcome(r), "@@@@@@@@@@@@@")
	session := cmn.GetSession(r)
	fmt.Println(session.Values["userId"], "^^^")
	cmn.Resp(w, &req)
	return
}
