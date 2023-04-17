package chat

//author: {"name":"chat","email":"389403710@qq.com"}
//annotation:chat-service

import (
	"backend/cmn"
	"encoding/json"
	"fmt"
	"go.uber.org/zap"
	"net/http"
)

type chatUser struct {
	sendId      string
	sendName    string
	receiveId   string
	receiveName string
}

func Enroll(author string) {
	fmt.Println("chat enroll call! ")
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
		Fn:   chat,
		Path: "/api/chat",
		Name: "chat",
	}
	err := cmn.AddService(&ep)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(developer)
}

var (
	hub      *Hub
	chatRoom map[string]chatUser
	z        *zap.Logger
)

func init() {
	//create a public chat room
	//create a msg hub
	z = cmn.GetLogger()
	hub = newHub()
	go hub.run2()
	//init chatRoom to store chatter id
	chatRoom = make(map[string]chatUser, 100)
}

func chat(w http.ResponseWriter, r *http.Request) {
	fmt.Println("chat service")
	//############
	//get query parameter
	params := r.URL.Query()
	sendId := string(params["currentId"][0])
	receiveId := string(params["connTargetId"][0])

	sendName := params["currentName"][0]
	receiveName := params["targetName"][0]
	fmt.Println(sendId)
	fmt.Println(sendName)

	fmt.Println(receiveId)
	fmt.Println(receiveName)

	temp := chatUser{
		sendId:      sendId,
		sendName:    sendName,
		receiveId:   receiveId,
		receiveName: receiveName,
	}
	chatRoom[sendId] = temp
	//##################
	//这里写业务函数
	//注意这里，对于每个请求来说，都会新创建一个hub，如果创建聊天室，应该放到创建一个聊天室的地方
	serveWs(hub, w, r, temp)
}
