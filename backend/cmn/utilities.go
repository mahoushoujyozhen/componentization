package cmn

import (
	"crypto/md5"
	"encoding/hex"
	"fmt"
	"github.com/gorilla/sessions"
	"github.com/tidwall/pretty"
	"github.com/tidwall/sjson"
	"net/http"
	"os"
)

// JsonWrite set json key/value to file by path
// if fn doesn't exist then create it

var (
	store *sessions.CookieStore
)

func init() {
	z = GetLogger()
	store = sessions.NewCookieStore([]byte("SessionId"))
}

// GetStore
func GetSession(r *http.Request) *sessions.Session {
	session, _ := store.Get(r, "SessionId")
	return session
}

// Welcome
func Welcome(r *http.Request) bool {

	session := GetSession(r)
	if session.Values["auth"] == true {
		return true
	}

	if session.Values["auth"] == false || session.Values["auth"] == nil {
		return false
	}
	return true
}

//fn:  the path+fileName of JSON file
//path :json key path
//value: json value
//example is following
//err := JsonWrite("./xxx/config.json", "redis.init", true)

func JsonWrite(fn string, path string, value interface{}) (err error) {
	switch {
	case fn == "":
		err = fmt.Errorf("call JsonWrite with empty fn")
	case path == "":
		err = fmt.Errorf("call JsonWrite with empty path")
	case value == nil:
		err = fmt.Errorf("call JsonWrite with nil value")
	}

	if err != nil {
		z.Error(err.Error())
		return
	}

	buf, err := os.ReadFile(fn)
	if os.IsNotExist(err) {
		err = nil
	}

	if err != nil {
		z.Error(err.Error())
		return
	}
	if len(buf) == 0 {
		buf = []byte("{}")
	}

	rsl, err := sjson.Set(string(buf), path, value)
	if err != nil {
		z.Error(err.Error())
		return
	}

	err = os.WriteFile(fn, pretty.Pretty([]byte(rsl)), 0644)
	if err != nil {
		z.Error(err.Error())
	}
	return
}

// md5加密
func Md5(src string) string {
	m := md5.New()
	m.Write([]byte(src))
	res := hex.EncodeToString(m.Sum(nil))
	return res
}
