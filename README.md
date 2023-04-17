## Background

Project Introduction

> A Component-based management system, which contains highly reusable functional components, such as login registration, user management, file management, chat system

Frontend

>I use svelte-kit Framework and Material UI component library in frontend

Backend

>The backend folder contains all the backend code, based on Golang implementation, using viper configuration file parameter parsing, based on the Template feature of Golang language itself, the interface plug-in for the api is realized, mainly writing plug-in template, writing template generation function, and so on. Call the template generator function to generate the componentized API



## Language & Tools

Svelte

Golang

Postgres

Docker

Jenkins



## installs

This project use `npm` and `vite`

>install dependencies
>
>```shell
>npm install 
>```
>
>then run it
>
>```shell
>npm run dev
>```

backend:

All API implemented by Golang

>go to the directory where the `main.go` is located and run the command
>
>```
>go run main.go
>```



## Maintainers

[@mahoushoujyozhen](https://github.com/mahoushoujyozhen)



## How to do Stress Test

>Golang was used to implement the stress test function, test cases were designed for coherent interface calls, goroutine was opened to simulate multiple user access, the default API response time was more than 3s, indicating that the server had reached the upper limit, and the pressure test results were able to support about 2000 concurrency.



## Deployment(CI/CD)

>Use Docker for containerized deployment, write a DockerFile for the project, configure the running environment of the project container, and start the project. Use Jenkins+Gitlab for continuous integration. Configure Jenkins and Gitlab with network hook functions to implement that Jenkins will automatically pull the project and rebuild when local push.



## PS

if backend API does not work, please check the request URL correctly 
