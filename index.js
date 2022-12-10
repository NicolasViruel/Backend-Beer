const express = require("express")
const conectarDB = require("./database")
const bodyParser = require ("body-parser")
require("dotenv").config()
const cors = require('cors')

const UserRoutes = require("./routers/user")
const ProductsRoutes = require("./routers/producto")

//controladores
const UserControllers = require("./controllers/userControllers")
const ProductsControllers = require("./controllers/productosControllers")
const app = express()
//conexion a la base
conectarDB()
//parseamos el Body:
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

//ruta de usuarios
app.use('/api/users', UserRoutes)
//ruta de productos
app.use('/api/productos', ProductsRoutes)

const port = 3000
app.listen(port , () =>{
    console.log(`server listen in ${port}`);
})
