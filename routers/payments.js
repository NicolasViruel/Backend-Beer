const express = require ('express')
const router= express.Router() 
const paymentControllers = require('../controllers/paymentControllers')

//Recuros:
//Recursos para obtener los productos:
router.post('/', paymentControllers.checkout)
// //Recursos para crear los productos:
// router.post('/payments/confirms', paymentControllers.checkout.confirmPayment)

module.exports=router