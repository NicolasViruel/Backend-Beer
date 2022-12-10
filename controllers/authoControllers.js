const bcrypt = require("bcryptjs")
const User = require("../models/user")
const utils_jwt = require("../utils/jwt")


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
        return res.status(200).send(newUser);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(500).send({msg:"The email already exists in the database"});
        }else{
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

const verifyToken = (req , res) =>{

  



}

module.exports = {
    register,
    login,
    verifyToken
}