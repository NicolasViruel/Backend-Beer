const express = require ('express')
const router= express.Router() 
const productosControllers = require('../controllers/productosControllers')


//Recuros:
//Recursos para obtener los productos:
router.get('/', productosControllers.getProducts)
//Recursos para crear los productos:
router.post('/', productosControllers.createProducts)
//Recursos para editar los productos:
router.put('/', productosControllers.updateProducts)
//Recursos para borrar los productos:
router.delete('/', productosControllers.deleteProducts)
//Recursos para buscar los productos:
router.get('/', productosControllers.findProducts)

module.exports=router