const express = require("express")
const UserControllers = require("../controllers/userControllers")
const AuthMiddleware = require("../middleware/authenticated")

const router = express.Router()


router.get("/", AuthMiddleware.isAuth , AuthMiddleware.isAdmin , UserControllers.getUsers)

router.get('/info' ,AuthMiddleware.isAuth, UserControllers.getUser)

router.post("/", AuthMiddleware.isAuth ,UserControllers.createUser)

router.put("/:id",AuthMiddleware.isAuth ,UserControllers.updateUser)

router.delete("/:id", AuthMiddleware.isAuth ,UserControllers.deleteUser)

router.get("/:id",UserControllers.findUser)

module.exports = router;