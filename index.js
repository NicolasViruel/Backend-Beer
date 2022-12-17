const express = require("express");
const conectarDB = require("./database");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors")
//Routers
const UserRoutes = require("./routers/user");
const AuthRoutes = require("./routers/auth");
const ProductsRoutes = require("./routers/producto")
//controladores
const app = express();

//parsear body
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(bodyParser.json());
app.use(cors());

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
//ruta de productos
app.use('/api/productos', ProductsRoutes)


//conexion al puerto
const port = 4000
app.listen(port , () =>{
    console.log(`server listen in ${port}`);
})
