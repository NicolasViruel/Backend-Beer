const express = require("express")
const conectarDB = require("./database")
const app = express()


//conexion a la base
conectarDB()

app.get("/api/users", (req , res) =>{
    if (req.headers.authorization) {
       return res.status(203).send ("Hello world")
        
    }else{
        res.status(400).send({msg: "Falta el header de authorization"})
    }
})

const port = 4000
app.listen(port , () =>{
    console.log(`server listen in ${port}`);
})
