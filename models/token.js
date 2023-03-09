const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

const TokenSchema = mongoose.Schema ({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "usuario",
        unique: true
    },
    token:{
        type: String,
        required: true,
    },
    create_at:{
        type: Date,
        default: Date.now,
        expires: 3600
    }
});

module.exports = mongoose.model("Token" , TokenSchema)