const mongoose = require("mongoose")
const Producto = require("./producto")

const FavoriteSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "usuario",
        
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: Producto,
        
    }
})

module.exports = mongoose.model("Favorite", FavoriteSchema)