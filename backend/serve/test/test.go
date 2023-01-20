package test

//author: {"name":"test","email":"XUnion@GMail.com"}
//annotation:test-service

import (
	"backend/cmn"
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
		Fn:   test,
		Path: "/api/test",
		Name: "test",
	}
	err := cmn.AddService(&ep)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(developer)
}

// authMgmt authenticate/authorization management
func test(w http.ResponseWriter, r *http.Request) {
	fmt.Println("test service")
	req := cmn.ReplyProto{
		Status: 200,
		Msg:    "test call success",
	}
	cmn.Resp(w, &req)
	return
}
