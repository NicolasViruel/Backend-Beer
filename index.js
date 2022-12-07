const express = require("express")
const conectarDB = require("./database")
require("dotenv").config()

const UserRoutes = require("./routers/user")
const ProductsRoutes = require("./routers/producto")

//controladores
const UserControllers = require("./controllers/userControllers")
const app = express()


//conexion a la base
conectarDB()

//ruta de usuarios
app.use('/api/users', UserRoutes)
//ruta de productos
app.use('/api/productos', ProductsRoutes)

const port = 4000
app.listen(port , () =>{
    console.log(`server listen in ${port}`);
})
