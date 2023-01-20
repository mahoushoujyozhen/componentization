# componentization
> A Component-based management system, which contains highly reusable functional components, such as login registration, user management, file management, chat system



## frontend

> The frontend folder contains the frontend code and uses the SvelteKit framework to componentize the frontend based on the SvelteKit framework itself (routing by directory)



## backend

> The backend folder contains all the backend code, based on Golang implementation, using viper configuration file parameter parsing, based on the Template feature of Golang language itself, the interface plug-in for the api is realized, mainly writing plug-in template, writing template generation function, and so on. Call the template generator function to generate the componentized API



## Stress Test

>Golang was used to implement the stress test function, test cases were designed for coherent interface calls, goroutine was opened to simulate multiple user access, the default api response time was more than 3s, indicating that the server had reached the upper limit, and the pressure test results were able to support about 2000 concurrency.

## 

## Deployment

>Use Docker for containerized deployment, write a DockerFile for the project, configure the running environment of the project container, and start the project. Use Jenkins+Gitlab for continuous integration. Configure Jenkins and Gitlab with network hook functions to implement that Jenkins will automatically pull the project and rebuild when local push.

