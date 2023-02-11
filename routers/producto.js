const express = require ('express')
const router= express.Router() 
const productosControllers = require('../controllers/productosControllers')



router.get('/', productosControllers.getProducts)

router.post('/', productosControllers.createProducts)

router.put('/:id', productosControllers.updateProducts)

router.delete('/:id', productosControllers.deleteProducts)

router.get('/:id', productosControllers.findProducts)

module.exports=router