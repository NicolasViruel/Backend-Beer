const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

mongoose.set('strictQuery', true);

const UserSchema = mongoose.Schema ({
    name: {
        String,
        maxLength: 50,
        minLength: 8,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        maxLength: 50,
        minLength: 8
    },
    password: {
        String,
        maxLength: 16,
        minLength: 8,
        require: true
    }, 
    role: String,
    active:{
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Usuarios" , UserSchema)