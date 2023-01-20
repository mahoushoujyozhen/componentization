package userlist

//author: {"name":"userlist","email":"XUnion@GMail.com"}
//annotation:userlist-service

import (
	"backend/cmn"
	"backend/db"
	"backend/zap_log"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
)

func Enroll(author string) {
	fmt.Println("userlist enroll call! ")
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
		Fn:   userlist,
		Path: "/api/userlist",
		Name: "userlit",
	}
	err := cmn.AddService(&ep)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(developer)
}

type userReq struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
}
type response struct {
	Status int       `json:"status"`
	Data   []userReq `json:"data"`
}

// authMgmt authenticate/authorization management
func userlist(w http.ResponseWriter, r *http.Request) {
	fmt.Println("userlist service")
	userid := r.FormValue("userid")
	log := zap_log.Log
	dbConn, _ := db.GetDBConn()
	defer db.Close(dbConn)
	//这里写业务函数
	var req = cmn.ReplyProto{
		Status: 0,
		Msg:    "success",
	}

	var (
		users    []userReq
		userTemp userReq
	)

	s := `SELECT id,username FROM usercst WHERE id <> $1;`
	rs, err := dbConn.Query(context.Background(), s, userid)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}

	for rs.Next() {
		var id int
		var username string
		rs.Scan(&id, &username)
		userTemp.Id = id
		userTemp.Username = username
		users = append(users, userTemp)
	}
	var response = response{
		Status: 0,
		Data:   users,
	}
	buf, err := json.Marshal(response)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	w.Write(buf)
	return
}
