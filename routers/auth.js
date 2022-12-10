const express = require("express")
const AuthoControllers= require("../controllers/authoControllers")

const router = express.Router()

router.post("/register", AuthoControllers.register);
router.post("/login", AuthoControllers.login);
//verificacion del usuario
router.post("/:id/verify/:token", AuthoControllers.verifyToken);


module.exports = router;