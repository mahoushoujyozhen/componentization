package jwt

import "github.com/golang-jwt/jwt/v5"

type Credentials struct {
	Username string `json:"username"`
	Password string `json:"pw"`
}

type Claims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
}
