const mongoose = require("mongoose")

const conectarDB = async () =>{
    try {
        await mongoose.connect(process.env.CONNECTMONGODB)

        console.log("Data Base Connect");
    } catch (error) {
        console.error
        process.exit(1)
    }

}

module.exports = conectarDB