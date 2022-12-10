
const mongoose = require ('mongoose')
mongoose.set('strictQuery', true);

const ProductoSchema = mongoose.Schema({
    ProductName:{
        type:String,
        require: true,
        unique: true,
        minLength: 1,
        maxLength:50,

    },
    Productdetalle:{
        type:String,
        required: true,
        unique: false,
        minLength: 5,
        maxLength:100,

    },
    PriceProduct:{
        type: Number,
        required:true,
    },
    ImgURL:{
        type: String,
        required:true,
    },
    Category:{
        type: String,
        required:true,
        minLength: 5,
        maxLength:100,

    },
    Graduation:{
        type:String,
        required:true,
        minLength: 2,
        maxLength:100,
    },
    Avaliable:{
        type: Boolean,
        defaul:false,
    },
    

})
 module.exports = mongoose.model("Producto",ProductoSchema )