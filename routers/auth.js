const express = require("express")
const AuthControllers= require("../controllers/authControllers")

const router = express.Router()

router.post("/register", AuthControllers.register);
router.post("/login", AuthControllers.login);
//verificacion del usuario
router.get("/:id/verify/:token", AuthControllers.verifyToken);
//recuperar contraseña
router.post("/recovery-password", AuthControllers.recoveryPassword);
//ruta para cambiar contraseña
router.put("/recovery-password/new-password", AuthControllers.newPassword) 


module.exports = router;