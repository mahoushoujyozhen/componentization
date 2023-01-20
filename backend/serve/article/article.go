package article

//author: {"name":"article","email":"389403710@qq.com"}
//annotation:article-service

import (
	"backend/cmn"
	"backend/db"
	"backend/zap_log"
	"context"
	"encoding/json"
	"fmt"
	"github.com/jackc/pgx/v5/pgxpool"
	"go.uber.org/zap"
	"math/big"
	"net/http"
	"time"
)

type articleStruct struct {
	ArticleId  int     `json:"article_id"` //文章id
	UserId     int     `json:"user_id"`    //文章所属用户id
	Content    string  `json:"content"`    //内容
	Title      string  `json:"title"`      //标题
	Abstract   string  `json:"abstract"`   //摘要
	CreatTime  big.Int `json:"creatTime"`  //创建时间
	UpdateTime big.Int `json:"updateTime"` //更新时间
	Publish    int     `json:"publish"`    //发布状态: -1 已删除 ; 0 保存未发布; 1 已发布;
	Type       string  `json:"type"`       //文章分类
	Method     string  `json:"method"`
}
type resp struct {
	Status int           `json:"status"`
	Msg    string        `json:"msg"`
	Data   articleStruct `json:"data"`
}

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

	cmn.AddService(&cmn.ServeEndPoint{
		Fn:   publishArticle,
		Path: "/api/article/publish",
		Name: "article",
	})
	cmn.AddService(&cmn.ServeEndPoint{
		Fn:   saveArticle,
		Path: "/api/article/save",
		Name: "article",
	})
	cmn.AddService(&cmn.ServeEndPoint{
		Fn:   getArticleContent,
		Path: "/api/article/content",
		Name: "article",
	})
	cmn.AddService(&cmn.ServeEndPoint{
		Fn:   listArticle,
		Path: "/api/article/list",
		Name: "article",
	})

	fmt.Println(developer)
}

func publishArticle(w http.ResponseWriter, r *http.Request) {
	fmt.Println("article service")
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
	var article = articleStruct{}
	err = json.NewDecoder(r.Body).Decode(&article)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	fmt.Println("userId:", article.UserId)
	fmt.Println("articleId:", article.ArticleId)
	fmt.Println("method:", article.Method)
	fmt.Println("content", article.Content)
	fmt.Println("title", article.Title)
	fmt.Println("type", article.Type)
	fmt.Println("abstract", article.Abstract)
	//创建时间
	timeUnix := time.Now().Unix()
	if article.ArticleId == 0 {

		//首次发布
		s := `INSERT INTO article (content,user_id,publish,create_time,title,type,abstract) VALUES ($1,$2,$3,$4,$5,$6,$7);`
		_, err := dbConn.Exec(context.Background(), s, article.Content, article.UserId, 1, timeUnix, article.Title, article.Type, article.Abstract)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 778
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, &req)
			return
		}
		var articleId int
		//查找出最新产生的那条数据（article_id按照降序排列）
		s = `SELECT article_id FROM article WHERE  user_id = $1
			order by article_id DESC ;`
		rs := dbConn.QueryRow(context.Background(), s, article.UserId)
		err = rs.Scan(&articleId)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 779
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, &req)
			return
		}

		var resArticle = articleStruct{
			ArticleId: articleId,
		}
		var resp = resp{
			Status: 0,
			Msg:    "发布成功",
			Data:   resArticle,
		}
		buf, err := json.Marshal(resp)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 777
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, &req)
			return
		}
		fmt.Println(string(buf))
		w.Write(buf)
		return
	}
	//发布更新
	s := `UPDATE article 
		SET content = $1 , publish = $2 ,update_time = $3 ,title = $4 , type = $5 ,abstract = $6 WHERE article_id = $7;`
	_, err = dbConn.Exec(context.Background(), s, article.Content, 1, timeUnix, article.Title, article.Type, article.Abstract, article.ArticleId)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 778
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}

	var resp = resp{
		Status: 0,
		Msg:    "发布成功",
	}
	buf, err := json.Marshal(resp)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	fmt.Println(string(buf))
	w.Write(buf)
	return

}

func articlePublish(w http.ResponseWriter, log *zap.Logger, req *cmn.ReplyProto, dbConn *pgxpool.Conn, article *articleStruct) {
	if article.ArticleId == 0 {
		//首次发布
		s := `INSERT INTO article (content,user_id,publish) VALUES ($1,$2,$3);`
		_, err := dbConn.Exec(context.Background(), s, article.Content, article.UserId, 1)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 778
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, req)
			return
		}
		var articleId int
		//查找出最新产生的那条数据（article_id按照降序排列）
		s = `SELECT article_id FROM article WHERE  user_id = $1
			order by article_id DESC ;`
		rs := dbConn.QueryRow(context.Background(), s, article.UserId)
		err = rs.Scan(&articleId)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 779
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, req)
			return
		}

		var resArticle = articleStruct{
			ArticleId: articleId,
		}
		var resp = resp{
			Status: 0,
			Msg:    "发布成功",
			Data:   resArticle,
		}
		buf, err := json.Marshal(resp)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 777
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, req)
			return
		}
		fmt.Println(string(buf))
		w.Write(buf)
		return
	}
	//发布更新
	s := `UPDATE article 
		SET content = $1 , publish = $2  WHERE article_id = $3;`
	_, err := dbConn.Exec(context.Background(), s, article.Content, 1, article.ArticleId)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 778
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, req)
		return
	}

	var resp = resp{
		Status: 0,
		Msg:    "发布成功",
	}
	buf, err := json.Marshal(resp)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, req)
		return
	}
	fmt.Println(string(buf))
	w.Write(buf)
	return
}
func saveArticle(w http.ResponseWriter, r *http.Request) {
	fmt.Println("article service")
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
	var article = articleStruct{}
	err = json.NewDecoder(r.Body).Decode(&article)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	fmt.Println("userId:", article.UserId)
	fmt.Println("articleId:", article.ArticleId)
	fmt.Println("method:", article.Method)
	fmt.Println("content", article.Content)
	fmt.Println("title", article.Title)
	fmt.Println("type", article.Type)
	fmt.Println("abstract", article.Abstract)
	timeUnix := time.Now().Unix()
	if article.ArticleId == 0 {
		//首次保存
		s := `INSERT INTO article (content,user_id,publish,create_time,title,type,abstract) VALUES ($1,$2,$3,$4,$5,$6,$7);`
		_, err := dbConn.Exec(context.Background(), s, article.Content, article.UserId, 0, timeUnix, article.Title, article.Type, article.Abstract)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 778
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, &req)
			return
		}
		var articleId int
		//之后修改为查找出最新产生的那条数据（article_id按照降序排列）
		s = `SELECT article_id FROM article WHERE  user_id = $1
			order by article_id DESC ;`
		rs := dbConn.QueryRow(context.Background(), s, article.UserId)
		err = rs.Scan(&articleId)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 779
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, &req)
			return
		}

		var resArticle = articleStruct{
			ArticleId: articleId,
		}
		var resp = resp{
			Status: 0,
			Msg:    "保存成功",
			Data:   resArticle,
		}
		buf, err := json.Marshal(resp)
		if err != nil {
			log.Error(fmt.Sprintf("err: %s", err))
			req.Status = 777
			req.Msg = fmt.Sprintf("err: %s", err)
			cmn.Resp(w, &req)
			return
		}
		fmt.Println(string(buf))
		w.Write(buf)
		return
	}
	//保存更新
	s := `UPDATE article 
		SET content = $1  ,update_time = $2 ,title = $3 , type = $4 ,abstract = $5 WHERE article_id = $6;`
	_, err = dbConn.Exec(context.Background(), s, article.Content, timeUnix, article.Title, article.Type, article.Abstract, article.ArticleId)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 778
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}

	var resp = resp{
		Status: 0,
		Msg:    "保存成功",
	}
	buf, err := json.Marshal(resp)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	fmt.Println(string(buf))
	w.Write(buf)
	return
}

// return article
func getArticleContent(w http.ResponseWriter, r *http.Request) {
	fmt.Println("article service")
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
	var article = articleStruct{}
	err = json.NewDecoder(r.Body).Decode(&article)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	fmt.Println("userId:", article.UserId)
	fmt.Println("articleId:", article.ArticleId)
	fmt.Println("method:", article.Method)
	fmt.Println("content", article.Content)

	//	use article_id to search content
	s := `SELECT content , title ,type ,abstract FROM article WHERE article_id = $1
	order by article_id DESC;`
	rs := dbConn.QueryRow(context.Background(), s, article.ArticleId)
	var resArticle = articleStruct{}
	err = rs.Scan(&resArticle.Content, &resArticle.Title, &resArticle.Type, &resArticle.Abstract)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 778
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	var resp = resp{
		Status: 0,
		Msg:    "展示成功",
		Data:   resArticle,
	}
	fmt.Println(resArticle.Content, "$$$$$$$$")
	buf, err := json.Marshal(resp)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	fmt.Println(string(buf))
	w.Write(buf)
	return

}

func listArticle(w http.ResponseWriter, r *http.Request) {
	fmt.Println("article service")
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
	var article = articleStruct{}
	err = json.NewDecoder(r.Body).Decode(&article)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	fmt.Println("userId:", article.UserId)
	fmt.Println("articleId:", article.ArticleId)
	fmt.Println("method:", article.Method)
	fmt.Println("content", article.Content)

	//	use article_id to search content
	s := `SELECT content FROM article WHERE article_id = $1
	order by article_id DESC;`
	rs := dbConn.QueryRow(context.Background(), s, article.ArticleId)
	var resArticle = articleStruct{}
	err = rs.Scan(&resArticle.Content)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 778
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	var resp = resp{
		Status: 0,
		Msg:    "展示成功",
		Data:   resArticle,
	}
	fmt.Println(resArticle.Content, "$$$$$$$$")
	buf, err := json.Marshal(resp)
	if err != nil {
		log.Error(fmt.Sprintf("err: %s", err))
		req.Status = 777
		req.Msg = fmt.Sprintf("err: %s", err)
		cmn.Resp(w, &req)
		return
	}
	fmt.Println(string(buf))
	w.Write(buf)
	return

}
