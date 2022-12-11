const bcrypt = require("bcryptjs")
const User = require("../models/user")
const utils_jwt = require("../utils/jwt")
const Token = require("../models/token")
const crypto = require("crypto")
const nodemailer = require("../utils/nodemailer")

const register = async(req, res)=>{
    
    const {name, email, password} = req.body
    if (!email) return res.status(400).send({msg:"Email is required"});
    if (!password) return res.status(400).send({msg:"The password is required"});

    const user = new User({
        name,
        email:email.toLowerCase(),
        password,
        role:"admin"
    })

    const salt = bcrypt.genSaltSync(Number(process.env.SALT));
    const passwordHash = bcrypt.hashSync(password, salt);
    user.password = passwordHash;
    
    try {
        const newUser = await user.save();

        //creamos el token y enviamos el email
        const token = await Token({
            userId: newUser._id,
            token: crypto.randomBytes(32).toString("hex")
        })
        await token.save()

        const url = `${process.env.URL_API}/api/auth/${newUser._id}/veryfy/${token.token}`

        await nodemailer.sendEmail(newUser.email, "nicolasviruel@gmail.com", url)

        return res.status(200).send(newUser);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(500).send({msg:"The email already exists in the database"});
        }else{
            console.log(error);
            return res.status(500).send({msg:"Failed to create user"});
        }
    }

}

const login = async (req, res)=>{
    
    const { email , password } = req.body
    if (!email || !password) {
        return res.status(400).send({msg:"All fields are required"});
    }   
    const emailLowerCase = email.toLowerCase();


    try {
        const findUser = await User.findOne({ email:emailLowerCase })
    
        if (findUser) {
            const isMatch = bcrypt.compareSync( password, findUser.password )
            if (isMatch) {
                //generamos el Token
                res.status(200).send({token: utils_jwt.createToken(findUser)})
            }else{
                res.status(400).send({msg:"The email or the password are incorrect"})
            }
        } else {
           return res.status(404).send({msg:"User not found"})
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({msg:"User not found error"})
    }


}

const verifyToken = async (req , res) =>{

    const {id, token} = req.params
    
    try {
    const user = await User.findOne({_id: id})
        if (user === null) {
            return  res.status(404).send({msg: "Could not verify id"})
        } 
    const tokenVerify = await Token.findOne({userId : user._id, token})
         if (tokenVerify === null) {
             return  res.status(404).send({msg: "Failed to verify token" })
         }
        await tokenVerify.remove()

    } catch (error) {
        console.log(error);
        return  res.status(500).send({msg:"Mistake!! Try again"})
    }

    try {
        
        await User.findByIdAndUpdate({_id : id} , {active:true}) 
        return  res.status(200).send({msg: "Your user is already activated"})
        //ya devolvemos el 200 y que se confirmo el mail
    } catch (error) {
        return  res.status(500).send({msg:"Error Could not verify"})
    }
}

const recoveryPassword = async (req, res) =>{
    const {email} = req.body
    try {
        const user = await User.findOne({email})
        //validamos que exista
        if (!user) {
            return res.status(404).send({msg:"Error"})
        }
        //creamos el token con el usuario
        const token = await Token({
            userId: User._id,
            token: crypto.randomBytes(32).toString("hex")
        })
        //guardamos el token
        await token.save()
        //creamos la url
        const link =  `<a href= "www.dominiofrontend.com/recovery-pass/${token.token}" style{{color : "red"}} >Recuperar Contraseña</a>`
        
        await nodemailer.sendEmail(email, "app@tu-aplicacion.com", link)

        //enviamos el email con la ruta del formulario con el password //dominioDelFront/new-password/:token
        res.status(200).send({msg:"Revisa tu correo para terminar el proceso"})
    } catch (error) {
        console.log(error);
        return res.status(500).send("error del servidor")
    }
}

const newPassword = async(req, res) =>{
    const {password : newPassword} = req.body
    if (!req.headers.token) {
        return res.status(400).send({msg:"Falta headers token"})
    }

    try {
        const tokenHeader = req.headers.token.replace("Bearer ", "") ;
        const token = await Token.findOne({token: tokenHeader })
        if (!token) {
            return res.status(400).send({msg:"Error en el token"})
        }
        const user = await User.findOne(token.userId)
        if (!user) {
            return res.status(400).send({msg:"Error en el usuario"})
        }

        const isMatch = bcrypt.compareSync(newPassword, user.password)
        if (isMatch) {
            return res.status(400).send({msg:"No se puede repetir la clave anterior"})
        }
        console.log(user.password, newPassword);
        
        const salt = bcrypt.genSaltSync(Number(process.env.SALT));
        const passwordHash = bcrypt.hashSync(newPassword,salt);
        
        await token.remove()

        await User.findByIdAndUpdate( user._id , {password: passwordHash});
        return res.status(200).send({ msg:"Constraseña cambiada Exitosamente"});
       
    
    } catch (error) {
        console.log(error);
        return res.status(500).send({msg:"Error en el cambio de la Contraseña"})        
    }
}


module.exports = {
    register,
    login,
    verifyToken,
    recoveryPassword,
    newPassword
}