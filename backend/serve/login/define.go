package login

import "github.com/golang-jwt/jwt/v5"

type Credentials struct {
	Username string `json:"username"`
	Password string `json:"pw"`
}

type Claims struct {
	Id       int    `json:"id"`
	Username string `json:"username"`
	jwt.RegisteredClaims
}
