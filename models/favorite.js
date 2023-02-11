const mongoose = require("mongoose")

const FavoriteSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "usuario",
        unique: true
    },
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Producto",
        unique:true
    }
})

module.exports = mongoose.model("Favorite", FavoriteSchema)