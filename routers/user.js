const express = require("express")
const UserControllers = require("../controllers/userControllers")
const AuthMiddleware = require("../middleware/authenticated")

const router = express.Router()

//recurso para Traer todos los usuarios
router.get("/", AuthMiddleware.isAuth , UserControllers.getUsers)
//recurso para Crear un usuario
router.post("/", AuthMiddleware.isAuth, AuthMiddleware.isAdmin ,UserControllers.createUser)
//recurso para Modificacion de un usuario
router.put("/:id", AuthMiddleware.isAuth, AuthMiddleware.isAdmin ,UserControllers.updateUser)
//recurso para Eliminar un usuario
router.delete("/:id", AuthMiddleware.isAuth, AuthMiddleware.isAdmin ,UserControllers.deleteUser)

module.exports = router;