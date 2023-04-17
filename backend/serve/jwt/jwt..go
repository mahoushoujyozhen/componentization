package jwt

//author: {"name":"jwt-Login","email":"389403710@qq.com"}
//annotation:jwt-service

import (
	"backend/cmn"
	"encoding/json"
	"fmt"
	"github.com/golang-jwt/jwt/v5"
	"go.uber.org/zap"
	"net/http"
	"time"
)

func Enroll(author string) {
	fmt.Println("jwt enroll call! ")
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
		Fn:   Signin, //登录
		Path: "/api/jwt",
		Name: "Signin",
	}
	err := cmn.AddService(&ep)
	if err != nil {
		fmt.Println(err)
		return
	}

	err = cmn.AddService(&cmn.ServeEndPoint{
		Fn:   Welcome, //自动鉴权
		Path: "/api/jwt/welcome",
		Name: "autoCheckToken",
	})
	if err != nil {
		fmt.Println(err)
		return
	}

	err = cmn.AddService(&cmn.ServeEndPoint{
		Fn:   Refresh, //令牌续签
		Path: "/api/jwt/refresh",
		Name: "RefreshToken",
	})
	if err != nil {
		fmt.Println(err)
		return
	}

	fmt.Println(developer)
}

const (
	TokenName = "mahoushoujyo"
	TokenPw   = "123456"
)

var (
	z *zap.Logger
)

func init() {
	z = cmn.GetLogger()
}

// authMgmt authenticate/authorization management
func jwtClams(w http.ResponseWriter, r *http.Request) {
	type TokenClaims struct {
		Username string `json:"username"`
		Pw       string `json:"pw"`
		jwt.RegisteredClaims
	}
	//claims for generate a new token
	claims := TokenClaims{
		"mahoushoujyo",
		"123456",
		jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(24 * time.Hour)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			NotBefore: jwt.NewNumericDate(time.Now()),
			Issuer:    "mahoushoujyo",
			Subject:   "somebody",
			ID:        "1",
			Audience:  []string{"somebody_else"},
		},
	}

	//create private key
	key := []byte("mahoushoujyo")
	//use signing method and claims to generate a new token struct
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	//token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.MapClaims{
	//	"user": "mahoushoujyo",
	//	"pass": "1234123",
	//})
	fmt.Println(claims)
	fmt.Println(token)
	signingString, err := token.SignedString(key)
	if err != nil {
		return
	}
	fmt.Println(signingString, "############")

	//	parse the token
	tokenParse, err := jwt.ParseWithClaims(signingString, &TokenClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte("mahoushoujyo"), nil
	})

	fmt.Println(tokenParse, "@@@@@@@@@@@@")
	if claims, ok := tokenParse.Claims.(*TokenClaims); ok && tokenParse.Valid {
		fmt.Printf("%v %v %v", claims.Username, claims.Pw, claims.RegisteredClaims.Issuer)
	} else {
		fmt.Println(err)
	}
	fmt.Println("jwt service")
	req := cmn.ReplyProto{
		Status: 200,
		Msg:    "test call success",
	}
	cmn.Resp(w, &req)
	return
}

var (
	jwtKey = []byte("mahoshoujyo_key")
	users  = map[string]string{
		"mahoushoujyo": "123456",
		"admin":        "123456",
	}
)

func Signin(w http.ResponseWriter, r *http.Request) {

	var creds Credentials
	//获取json正文（username和pw）作为凭证
	err := json.NewDecoder(r.Body).Decode(&creds)
	if err != nil {
		//如果主题结构错误
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	//	再map中获取用户的预期中的password
	expectedPassword, ok := users[creds.Username]
	//	如果预期的用户密码和我们收到的用户密码相同，那么继续生成token
	//	如果不是，返回"未经授权”的状态
	if !ok || expectedPassword != creds.Password {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}
	//声明令牌的到期时间，将其保留为5分钟
	expirationtime := time.Now().Add(time.Minute * 5)
	//创建用户声明，用于包括用户名还有有效时间，用于签署数字签名
	claims := &Claims{
		Username: creds.Username,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: &jwt.NumericDate{Time: expirationtime},
		},
	}
	//使用用于签名的算法和令牌
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	//tokenString 是使用了claims（内部原理是用的base64）和 密钥使用特定的签名算法生成的JWT字符串
	tokenString, err := token.SignedString(jwtKey)
	fmt.Println(tokenString, "&&&&&&&&&&&&&&&&")
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,    //JWT字符串作为token
		Expires: expirationtime, //cookie的过期时间
	})
	w.WriteHeader(http.StatusOK)
}

// 自动鉴权
func Welcome(w http.ResponseWriter, r *http.Request) {
	c, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			//如果未设置Cookies，则说明用户没有进行认证
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		//对于其他类型的错误，返回错误请求状态
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	tokenStr := c.Value
	//初始化claims实例
	claims := &Claims{}

	//	解析了JWT字符串并将结果储存到claims中
	// 在此方法中也传递了密钥
	//如果令牌无效（如果令牌已经过期）或者签名不匹配，此方法会返回错误
	tkn, err := jwt.ParseWithClaims(tokenStr, claims, func(token *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})
	if err != nil {
		//使用私钥去解密，查看签名是否有效，
		if err == jwt.ErrSignatureInvalid {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	//查看令牌是否有效（是否在有效期内）
	if !tkn.Valid {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	//	最后，将欢迎的消息以及令牌中的用户名返回给用户
	w.Write([]byte(fmt.Sprintf("Welcome %s!", claims.Username)))
}

// 令牌续签（更新有效时间）
func Refresh(w http.ResponseWriter, r *http.Request) {
	//	此处代码与Welcome第一部分一致
	c, err := r.Cookie("token")
	if err != nil {
		if err == http.ErrNoCookie {
			//如果未设置Cookies，则说明用户没有进行认证
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		//对于其他类型的错误，返回错误请求状态
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	tokenStr := c.Value
	//初始化claims实例
	claims := &Claims{}

	//	解析了JWT字符串并将结果储存到claims中
	// 在此方法中也传递了密钥
	//如果令牌无效（如果令牌已经过期）或者签名不匹配，此方法会返回错误
	tkn, err := jwt.ParseWithClaims(tokenStr, claims, func(token *jwt.Token) (interface{}, error) {
		return jwtKey, nil
	})
	if err != nil {
		//使用私钥去解密，查看签名是否有效，
		if err == jwt.ErrSignatureInvalid {
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	//查看令牌是否有效（是否在有效期内）
	if !tkn.Valid {
		w.WriteHeader(http.StatusUnauthorized)
		return
	}

	//	我们确保在足够的时间之前不会发行新的令牌
	//在这种请款你改下，仅当旧的令牌在30秒到期时才发行新令牌
	//否则返回错误的请求状态
	if time.Unix(claims.ExpiresAt.Unix(), 0).Sub(time.Now()) > 30*time.Second {
		w.WriteHeader(http.StatusBadRequest)
		return
	}
	//	现在为当前用户创建一个新的令牌，并延长其的到期时间
	expirationTime := time.Now().Add(time.Minute * 5)
	claims.ExpiresAt = &jwt.NumericDate{Time: expirationTime}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenStr, err = token.SignedString(jwtKey)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}
	//	设置用户新的token
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenStr,
		Expires: expirationTime,
	})
}
