const express = require ('express');
const router= express.Router();

const favoriteControllers = require("../controllers/favoriteControllers")

router.post('/', favoriteControllers.createFavorites)

module.exports=router