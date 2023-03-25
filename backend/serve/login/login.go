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
	"github.com/golang-jwt/jwt/v5"
	"github.com/jackc/pgx/v5"
	"net/http"
	"time"
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
	//login_jwt : use jwt to implement login api
	err := cmn.AddService(&cmn.ServeEndPoint{
		Fn:   login_jwt,
		Path: "/api/login",
		Name: "login",
	})
	if err != nil {
		fmt.Println(err)
		return
	}

	//check login or not
	err = cmn.AddService(&cmn.ServeEndPoint{
		Fn:   Welcome,
		Path: "/api/login/welcome",
		Name: "Welcome",
	})
	if err != nil {
		fmt.Println(err)
		return
	}

	//refresh token when token was invalid
	err = cmn.AddService(&cmn.ServeEndPoint{
		Fn:   Refresh,
		Path: "/api/login/refresh",
		Name: "Refresh",
	})
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Println(developer)
}

var (
	expirationTime time.Time
	PrivateKey     []byte
)

func init() {

	expirationTime = time.Now().Add(time.Minute * 5)
	PrivateKey = []byte("mahoushoujyoKey")
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

	//register
	s := `SELECT id FROM usercst WHERE username = $1 and password = $2; `
	rs := dbConn.QueryRow(context.Background(), s, username, pw)
	err = rs.Scan(&id)
	if err != nil {

		//不存在，注册
		if errors.Is(err, pgx.ErrNoRows) {
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

//Define private key

func login_jwt(w http.ResponseWriter, r *http.Request) {
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

	//register
	s := `SELECT id FROM usercst WHERE username = $1 and password = $2; `
	rs := dbConn.QueryRow(context.Background(), s, username, pw)
	err = rs.Scan(&id)
	if err != nil {

		//不存在，注册
		if errors.Is(err, pgx.ErrNoRows) {
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

			//颁发token
			tokenStr, err := generate_token(username, id)
			if err != nil {
				log.Error(err.Error())
			}

			if tokenStr != "" {
				//设置token
				http.SetCookie(w, &http.Cookie{
					Name:     "token",
					Value:    tokenStr,
					Expires:  expirationTime,
					SameSite: http.SameSiteNoneMode,
					Secure:   true,
				})
			}
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

	//颁发token
	tokenStr, err := generate_token(username, id)
	if err != nil {
		log.Error(err.Error())
	}

	if tokenStr != "" {
		//设置token
		http.SetCookie(w, &http.Cookie{
			Name:    "token",
			Value:   tokenStr,
			Expires: expirationTime,
			//SameSite= None 保证cookie可以在跨域过程中被传递和接受，并且要设置Secure=true值才会生效
			SameSite: http.SameSiteNoneMode,
			Secure:   true,
		})

	}
	cmn.Resp(w, &req)
	return

}

// 利用username 和 id 进行签名，颁发令牌
func generate_token(username string, id int) (string, error) {
	log := zap_log.Log
	//	创建用户声明，用于签名
	claims := &Claims{
		Username: username,
		Id:       id,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: &jwt.NumericDate{Time: expirationTime},
		},
	}

	//使用签名算法对用户声明进行签名
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	tokenStr, err := token.SignedString(PrivateKey)
	if err != nil {
		log.Error("生成tokenStr失败")
		return "", err
	}
	return tokenStr, nil
}

// 自动鉴权
func Welcome(w http.ResponseWriter, r *http.Request) {
	var req = cmn.ReplyProto{
		Status: 0,
		Msg:    "success",
	}
	log := zap_log.Log
	c, err := r.Cookie("token")

	if err != nil {
		if err == http.ErrNoCookie {
			//如果未设置Cookies，则说明用户没有进行认证
			req.Status = 401
			req.Msg = "No Cookie"
			log.Error(req.Msg)
			cmn.Resp(w, &req)
			return
		}
		//对于其他类型的错误，返回错误请求状态
		req.Status = 400
		req.Msg = "cookie err"
		log.Error(req.Msg)
		cmn.Resp(w, &req)
		return
	}
	//Get token value
	tokenStr := c.Value
	//初始化claims实例
	claims := &Claims{}

	//	解析了JWT字符串并将结果储存到claims中
	// 在此方法中也传递了密钥
	//如果令牌无效（如果令牌已经过期）或者签名不匹配，此方法会返回错误
	tkn, err := jwt.ParseWithClaims(tokenStr, claims, func(token *jwt.Token) (interface{}, error) {
		return PrivateKey, nil
	})
	if err != nil {
		//使用私钥去解密，查看签名是否有效，
		if err == jwt.ErrSignatureInvalid {
			req.Status = 401
			req.Msg = "No Cookie"
			log.Error(req.Msg)
			cmn.Resp(w, &req)
			return
		}
		req.Status = 400
		req.Msg = "cookie err"
		cmn.Resp(w, &req)
		return
	}
	//查看令牌是否有效（是否在有效期内）
	if !tkn.Valid {
		req.Status = 401
		req.Msg = "No Cookie"
		log.Error(req.Msg)
		cmn.Resp(w, &req)
		return
	}

	//	最后，将欢迎的消息以及令牌中的用户名返回给用户
	req.Msg = fmt.Sprintf("Welcome,%s", claims.Username)
	cmn.Resp(w, &req)
	return
}

// 令牌续签（更新有效时间）
func Refresh(w http.ResponseWriter, r *http.Request) {
	var req = cmn.ReplyProto{
		Status: 0,
		Msg:    "success",
	}
	log := zap_log.Log
	//	此处代码与Welcome第一部分一致
	c, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {

			//如果未设置Cookies，则说明用户没有进行认证
			req.Status = 401
			req.Msg = "No Cookie"
			log.Error(req.Msg)
			cmn.Resp(w, &req)
			return
		}
		//对于其他类型的错误，返回错误请求状态
		req.Status = 400
		req.Msg = "cookie err"
		log.Error(req.Msg)
		cmn.Resp(w, &req)
		return
	}
	tokenStr := c.Value
	//初始化claims实例
	claims := &Claims{}

	//	解析了JWT字符串并将结果储存到claims中
	// 在此方法中也传递了密钥
	//如果令牌无效（如果令牌已经过期）或者签名不匹配，此方法会返回错误
	tkn, err := jwt.ParseWithClaims(tokenStr, claims, func(token *jwt.Token) (interface{}, error) {
		return PrivateKey, nil
	})
	if err != nil {
		//使用私钥去解密，查看签名是否有效，
		if err == jwt.ErrSignatureInvalid {
			req.Status = 401
			req.Msg = "No Cookie"
			log.Error(req.Msg)
			cmn.Resp(w, &req)
			return
		}
		req.Status = 400
		req.Msg = "cookie err"
		log.Error(req.Msg)
		cmn.Resp(w, &req)
		return
	}
	//查看令牌是否有效（是否在有效期内）
	if !tkn.Valid {
		req.Status = 401
		req.Msg = "No Cookie"
		log.Error(req.Msg)
		cmn.Resp(w, &req)
		return
	}
	//	我们确保在足够的时间之前不会发行新的令牌
	//在这种请款你改下，仅当旧的令牌在30秒到期时才发行新令牌
	//否则返回错误的请求状态
	if time.Unix(claims.ExpiresAt.Unix(), 0).Sub(time.Now()) > 30*time.Second {
		req.Status = 401
		req.Msg = "No Cookie"
		log.Error(req.Msg)
		cmn.Resp(w, &req)
		return
	}
	//	现在为当前用户创建一个新的令牌，并延长其的到期时间
	expirationTime := time.Now().Add(time.Minute * 5)
	claims.ExpiresAt = &jwt.NumericDate{Time: expirationTime}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenStr, err = token.SignedString(PrivateKey)
	if err != nil {
		req.Status = 500
		req.Msg = "Server err"
		log.Error(req.Msg)
		cmn.Resp(w, &req)
		return
	}
	//	设置用户新的token
	http.SetCookie(w, &http.Cookie{
		Name:     "token",
		Value:    tokenStr,
		Expires:  expirationTime,
		SameSite: http.SameSiteNoneMode,
		Secure:   true,
	})
	req.Msg = "token refresh success"
	cmn.Resp(w, &req)
	return
}
