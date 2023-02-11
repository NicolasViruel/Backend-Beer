const express = require("express");
const conectarDB = require("./database");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors")

const UserRoutes = require("./routers/user");
const AuthRoutes = require("./routers/auth");
const ProductsRoutes = require("./routers/producto")

const app = express();


app.use(bodyParser.urlencoded( {extended:true} ));
app.use(bodyParser.json());
app.use(cors());


conectarDB()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


app.use('/api/users', UserRoutes);

app.use('/api/auth', AuthRoutes)

app.use('/api/productos', ProductsRoutes)

const port = 4000
app.listen(port , () =>{
    console.log(`server listen in ${port}`);
})
