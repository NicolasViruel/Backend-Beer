const express = require("express")
const AuthControllers= require("../controllers/authControllers")

const router = express.Router()

router.post("/register", AuthControllers.register);
router.post("/login", AuthControllers.login);

router.get("/:id/verify/:token", AuthControllers.verifyToken);

router.post("/recovery-password", AuthControllers.recoveryPassword);

router.put("/recovery-password/new-password", AuthControllers.newPassword) 


module.exports = router;