const express = require("express");
const conectarDB = require("./database");
const bodyParser = require("body-parser");
require("dotenv").config();

//Routers
const UserRoutes = require("./routers/user");
const AuthRoutes = require("./routers/auth");

//controladores
const UserControllers = require("./controllers/userControllers");
const app = express();

//parsear body
app.use(bodyParser.urlencoded( {extended:true} ));
app.use(bodyParser.json());
//conexion a la base
conectarDB()

//ruta de usuarios
app.use('/api/users', UserRoutes);
//ruta de Autenticacion
app.use('/api/auth', AuthRoutes)


//conexion al puerto
const port = 4000
app.listen(port , () =>{
    console.log(`server listen in ${port}`);
})
