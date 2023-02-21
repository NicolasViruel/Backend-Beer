const express = require ('express');
const router= express.Router();

const favoriteControllers = require("../controllers/favoriteControllers")

router.post('/', favoriteControllers.createFavorites);

router.delete('/:id', favoriteControllers.deleteFavorites);

router.get('/:id', favoriteControllers.getFavorites);

module.exports=router