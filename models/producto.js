
const mongoose = require ('mongoose')

const ProductoSchema = mongoose.Schema({
    ProductName:{},
    PriceProduct:{},
    ImgURL:{},
    Category:{}


})
 module.exports = mongoose.model("Producto",ProductoSchema )