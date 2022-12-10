const express = require("express")
const UserControllers = require("../controllers/userControllers")
const AuthMiddleware = require("../middleware/authenticated")

const router = express.Router()

//recurso para traer todos los usuarios
router.get("/", AuthMiddleware.isAuth , UserControllers.getUsers)
//recurso para crear un usuario
router.post("/", AuthMiddleware.isAuth, AuthMiddleware.isAdmin ,UserControllers.registerUser)

module.exports = router;