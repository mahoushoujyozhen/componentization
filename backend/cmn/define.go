package cmn

import (
	"net/http"
)

type ModuleAuthor struct {
	Name  string `json:"name"`
	Tel   string `json:"tel"'`
	Email string `json:"email"`
	Addi  string `json:"addi"`
}
type ServeEndPoint struct {
	Fn   func(w http.ResponseWriter, r *http.Request)
	Path string
	Name string
}

type User struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	Pw       string `json:"pw"`
	Gender   string `json:"gender,omitempty"`
	Age      int    `json:"age,omitempty"`
	Phone    string `json:"phone,omitempty"`
	Filepath string `json:"filepath,omitempty"`
}

type ReplyProto struct {
	//Status 0:success, others:fault
	Status int `json:"status"`

	//Msg, Action result describe by literal
	Msg string `json:"msg,omitempty"`

	////Data, operand
	Data User `json:"data,omitempty"`
}

const reqPathPattern = "^/(?P<type>\\w+)/(?P<target>\\w+)/(?P<action>\\w+)(\\?(?P<query>.*))?"

//err status
//777  读取body出错
//778  request.body 为空
//780  json Unmarshal 解析错误
//550  db insert failed
//560  db select failed
