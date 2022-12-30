const express = require ('express')
const router= express.Router() 
const productosFavoritos = require('../controllers/productosFavoritos')


//Recuros:
//Recursos para obtener los productos:
router.get('/', productosFavoritos.getProductsFavorites)
//Recursos para crear los productos:
router.post('/',productosFavoritos.createProductsFavorites)
//Recursos para borrar los productos:
router.delete('/:id', productosFavoritos.deleteProductsFavorites)
//Recursos para buscar los productos:
router.get('/:id', productosFavoritos.findProductsFavorites)

module.exports=router