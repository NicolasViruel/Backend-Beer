const express = require ('express')
const router= express.Router() 
const productosFavoritos = require('../controllers/productosFavoritos')


//Recuros:
//Recursos para obtener los productos:
router.get('/', productosFavoritos.getProducts)
//Recursos para crear los productos:
router.post('/',productosFavoritos.createProducts)
//Recursos para borrar los productos:
router.delete('/:id', productosFavoritos.deleteProducts)
//Recursos para buscar los productos:
router.get('/:id', productosFavoritos.findProducts)

module.exports=router