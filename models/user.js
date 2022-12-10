const mongoose = require("mongoose")
mongoose.set('strictQuery', true);


const UserSchema = mongoose.Schema ({
    name: String,
    email: {
        type: String,
        require: true
    },
    password: String,
    role: String
})

module.exports = mongoose.model("Usuarios" , UserSchema)