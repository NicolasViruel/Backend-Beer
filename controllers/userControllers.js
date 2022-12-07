const UserModel = require ("../models/user")


const getUsers = async(req , res) =>{
  try {
    
    const users = await UserModel.find()
    if (users) {
        return res.status(200).send(users)
    } else {
        return res.status(200).send([])
    }

  } catch (error) {
    res.status(500).send(error)
  }
}

const registerUser = async (req , res) =>{
    
        // console.log(req.body);
        const {name , password, email} = req.body;

        const newUser = new UserModel ({
            name,
            password,
            email,
            role: "user"
        })

        try {
           const user =  await newUser.save()
           return res.status(200).send(user)
        } catch (error) {
            res.status(400).send({msg:"El usuario ya existe"})
            console.log(error);
        }

}


module.exports ={
    getUsers,
    registerUser
}