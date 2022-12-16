const express = require("express");
const conectarDB = require("./database");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors")
//Routers
const UserRoutes = require("./routers/user");
const AuthRoutes = require("./routers/auth");

//controladores
const app = express();

//parsear body
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(bodyParser.json());
app.use(cors());

const UserRoutes = require("./routers/user")
const ProductsRoutes = require("./routers/producto")

//conexion a la base
conectarDB()
//parseamos el Body:
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())

//ruta de usuarios
app.use('/api/users', UserRoutes);
//ruta de Autenticacion
app.use('/api/auth', AuthRoutes)


//conexion al puerto
const port = 4000
app.use('/api/users', UserRoutes)
//ruta de productos
app.use('/api/productos', ProductsRoutes)
