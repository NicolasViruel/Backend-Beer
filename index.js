const express = require("express")
const conectarDB = require("./database")
require("dotenv").config()

const UserRoutes = require("./routers/user")

//controladores
const UserControllers = require("./controllers/userControllers")
const app = express()


//conexion a la base
conectarDB()

//ruta de usuarios
app.use('/api/users', UserRoutes)

const port = 4000
app.listen(port , () =>{
    console.log(`server listen in ${port}`);
})
