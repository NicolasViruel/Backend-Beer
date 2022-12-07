const mongoose = require("mongoose")

const conectarDB = async () =>{
    try {
        await mongoose.connect("mongodb+srv://admin:yQXZHEStCAqqpLvh@cluster0.6bihjyc.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        })

        console.log("Data Base Conectada");
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

module.exports = conectarDB