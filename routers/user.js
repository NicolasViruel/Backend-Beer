const express = require("express")
const UserControllers = require("../controllers/userControllers")
const AuthMiddleware = require("../middleware/authenticated")

const router = express.Router()

//recurso para Traer todos los usuarios
router.get("/", AuthMiddleware.isAuth , AuthMiddleware.isAdmin , UserControllers.getUsers)
//rutas de usuario (trae un solo usuario la base de datos)
router.get('/info' ,AuthMiddleware.isAuth, UserControllers.getUser)
//recurso para Crear un usuario
router.post("/", AuthMiddleware.isAuth ,UserControllers.createUser)
//recurso para Modificacion de un usuario
router.put("/:id",AuthMiddleware.isAuth ,UserControllers.updateUser)
//recurso para Eliminar un usuario
router.delete("/:id", AuthMiddleware.isAuth ,UserControllers.deleteUser)
//recurso para traer un solo usuario
router.get("/:id",UserControllers.findUser)

module.exports = router;