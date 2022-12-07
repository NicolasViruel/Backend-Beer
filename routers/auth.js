const express = require("express")
const AuthoControllers= require("../controllers/authoControllers")

const router = express.Router()

router.post("/register", AuthoControllers.register);
router.post("/login", AuthoControllers.login);


module.exports = router;