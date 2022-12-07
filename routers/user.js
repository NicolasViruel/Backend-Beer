const express = require("express")
const UserControllers = require("../controllers/userControllers")

const router = express.Router()

//recurso para traer todos los usuarios
router.get(" /", UserControllers.getUsers)
//recurso para crear un usuario
router.post("/", UserControllers.registerUser)

module.exports = router;