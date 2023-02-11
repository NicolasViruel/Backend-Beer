const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

mongoose.set('strictQuery', true);

const UserSchema = mongoose.Schema ({
    name: {
        String,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        String,
        // require: true
    }, 
    role: String,
    active:{
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Usuarios" , UserSchema)