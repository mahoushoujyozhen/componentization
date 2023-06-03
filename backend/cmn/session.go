package cmn

import (
	"github.com/gorilla/sessions"
	"net/http"
)

var (
	store *sessions.CookieStore
)

func init() {
	store = sessions.NewCookieStore([]byte("SessionId"))
}

// GetSession from gorilla/session store
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
