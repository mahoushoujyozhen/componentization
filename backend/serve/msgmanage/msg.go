package msgmanage

//author: {"name":"msgmanage","email":"389403710@qq.com"}
//annotation:msgmanage-service

import (
	"backend/cmn"
	"backend/db"
	"context"
	"encoding/json"
	"fmt"
	"go.uber.org/zap"
	"net/http"
)

func Enroll(author string) {
	fmt.Println("msgmanage enroll call! ")
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
		Fn:   msgmamage,
		Path: "/api/msgmanage",
		Name: "msgmanage",
	}
	err := cmn.AddService(&ep)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(developer)
}

var (
	z *zap.Logger
)

func init() {
	z = cmn.GetLogger()
}
func msgmamage(w http.ResponseWriter, r *http.Request) {
	fmt.Println("msgmanage service")
	dbConn, _ := db.GetDBConn()
	defer db.Close(dbConn)
	//这里写业务函数
	var req = cmn.ReplyProto{
		Status: 0,
		Msg:    "success",
	}
	var user = cmn.User{}
	err := json.NewDecoder(r.Body).Decode(&user)
	if err != nil {
		z.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	s := `UPDATE usercst
		SET username = $1,gender = $2, age = $3, phone = $4
		WHERE id = $5;`
	_, err = dbConn.Exec(context.Background(), s, user.Username, user.Gender, user.Age, user.Phone, user.Id)
	if err != nil {
		z.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	req.Msg = "个人信息更新成功"
	cmn.Resp(w, &req)
	return
}
