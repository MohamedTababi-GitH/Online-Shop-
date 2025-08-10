# Online Shop — A full-stack web application built with Angular, Spring Boot, and MariaDB

This is a web-based e-commerce application with functionality for both customers and administrators. It includes a secure backend built with Spring Boot Security and JWT (JSON Web Tokens) for authentication and authorization. This project was created from scratch for fun and learning purposes! (still in progress so some functions are not complete yet (listed at the bottom))

## ▶️ Demo
Here is a quick demo of the website 

![App Demo](demo.gif)


## ⭐ Features

### For Regular Users
- Browse products
- View detailed product descriptions
- Add items to the shopping cart
- Place orders

### For Administrators
- All regular user capabilities
- Add, edit, or remove products
- Manage customer orders

### Security
- Authentication and authorization using Spring Boot Security and JWT (JSON Web Tokens)
- Password hashing using BCrypt 


## 🚀 How to Run


### 🐳 Docker (recommended)
1. Make sure you have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

2. Clone the repository and navigate to the project folder

    ```
    git clone https://github.com/MohamedTababi-GitH/Online-Shop-.git
    cd Online-Shop-
3. Run Docker Compose to build and start the frontend, backend, and database containers
     ```
     docker-compose up -d 
4. Once the containers are running, you can access the website in your browser at `http://localhost:4200`
5. Login using [the credentials below](#login)


### 🧑‍💻 Manual Setup (Local Development)

1. Clone the repo  
2. Navigate to the frontend folder and run `ng serve`  
3. Navigate to the backend folder and run the main application 
4. Start MariaDB and initialize the database using the provided SQL init script  


## Login

You can log in using these preconfigured default users:

| Username | Password   |
|---|---|
| admin| Testing%50@123 |
| user | Testing+17@789 |


## Resources 

The JWT implementation was adapted from the following repo https://github.com/navinreddy20/spring6yt
