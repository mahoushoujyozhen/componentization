package filemanage

//author: {"name":"filemanage","email":"389403710@qq.com"}
//annotation:filemanage-service

import (
	"backend/cmn"
	"backend/db"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"github.com/jackc/pgx/v5"
	"go.uber.org/zap"
	"io"
	"net/http"
	"os"
)

func Enroll(author string) {
	fmt.Println("filemanage enroll call! ")
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
		Fn:   filemanage,
		Path: "/api/filemanage",
		Name: "filemanage",
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
func filemanage(w http.ResponseWriter, r *http.Request) {
	fmt.Println("filemanage service")

	method := r.FormValue("type")
	if method == "" {
		var req = cmn.ReplyProto{
			Status: 666,
			Msg:    "filemanage FormData type is null",
		}
		cmn.Resp(w, &req)
		return
	}
	switch method {
	case "post":
		Filepost(w, r)
	case "delete":
		Filedelete(w, r)
	}

}

func Filepost(w http.ResponseWriter, r *http.Request) {

	dbConn, _ := db.GetDBConn()
	defer db.Close(dbConn)
	//这里写业务函数
	var req = cmn.ReplyProto{
		Status: 0,
		Msg:    "success",
	}

	file, fileHeader, err := r.FormFile("file")
	if err != nil {
		z.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	HfileName := fileHeader.Filename

	//userid type string
	userid := r.FormValue("userId")

	//save file to ProjectRootPath \ static
	rootPath, err := os.Getwd()
	if err != nil {
		z.Error(fmt.Sprintf("rootPath get err:%s", err))
		return
	}
	//FName 是要存储的文件名
	FName := fmt.Sprintf("%s%s", userid, HfileName)
	//fileSavePath 是要存储的文件路径
	fileSavePath := fmt.Sprintf("%s/static/%s", rootPath, FName)
	fmt.Println(fileSavePath, "%%%%%%%%%%%%")
	//	storage file to rootPath\static
	//step1: create a file in a specified path
	//step2: copy sourceFile to targetFile
	//step3: close targetFile
	st, err := os.Create(fileSavePath)
	defer st.Close()
	if err != nil {
		z.Error(fmt.Sprintf("Create file err :%v", err))
		req.Status = 590
		req.Msg = err.Error()
		cmn.Resp(w, &req)
		return
	}

	_, err = io.Copy(st, file)
	if err != nil {
		z.Error(fmt.Sprintf("Copy file err :%v", err))
		req.Status = 590
		req.Msg = err.Error()
		cmn.Resp(w, &req)
		return
	}

	//store param fileSavePath  to db
	s := `INSERT INTO file (userid,filepath) VALUES($1,$2);`

	_, err = dbConn.Exec(context.Background(), s, userid, fileSavePath)

	if err != nil {
		z.Error(fmt.Sprintf("Copy file err :%v", err))
		req.Status = 590
		req.Msg = "该文件已上传，请勿重复上传该文件"
		cmn.Resp(w, &req)
		return
	}

	var user = cmn.User{}
	user.Filepath = fileSavePath
	req.Data = user
	req.Msg = "文件上传成功"
	cmn.Resp(w, &req)
	return

}
func Filedelete(w http.ResponseWriter, r *http.Request) {
	fmt.Println("file delete")
	dbConn, _ := db.GetDBConn()
	defer db.Close(dbConn)
	//这里写业务函数
	var req = cmn.ReplyProto{
		Status: 0,
		Msg:    "success",
	}
	id := r.FormValue("userId")
	s := `SELECT filepath FROM file WHERE userid = $1;`
	rs := dbConn.QueryRow(context.Background(), s, id)

	var filepath string
	err := rs.Scan(&filepath)
	if err != nil {
		//no file has uploaded
		if errors.Is(err, pgx.ErrNoRows) {
			z.Error(fmt.Sprintf("Copy file err :%v", err))
			req.Msg = "未上传文件，请上传文件后重试"
			cmn.Resp(w, &req)
			return
		}
		//filepath scan err
		z.Error(fmt.Sprintf("Copy file err :%v", err))
		req.Status = 590
		req.Msg = fmt.Sprintf("数据库查询失败:%v", err)
		cmn.Resp(w, &req)
		return

	}
	//	delete file in local
	err = os.Remove(filepath)
	if err != nil {
		z.Error(fmt.Sprintf("Copy file err :%v", err))
		req.Status = 590
		req.Msg = fmt.Sprintf("delete file err:%v", err)
		cmn.Resp(w, &req)
		return
	}

	s = `DELETE FROM file WHERE userid =$1 and filepath =$2;`
	_, err = dbConn.Exec(context.Background(), s, id, filepath)
	if err != nil {
		z.Error(fmt.Sprintf("Copy file err :%v", err))
		req.Status = 590
		req.Msg = fmt.Sprintf("DB delete file err:%v", err)
		cmn.Resp(w, &req)
		return
	}
	req.Msg = "删除文件成功"
	cmn.Resp(w, &req)
	return
}
