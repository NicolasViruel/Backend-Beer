const UserModel = require("../models/user");

const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    if (users) {
      return res.status(200).send(users);
    } else {
      return res.status(200).send([]);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const createUser = async (req, res) => {
  const { name, password, email } = req.body;

  const newUser = new UserModel({
    name,
    password,
    email,
    role: "admin",
  });

  try {
    const user = await newUser.save();
    return res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ msg: "User already exists" });
    console.error
  }
};

const updateUser = async(req , res)=>{
  const {id} = req.params;
  const userDate = req.body
  try {
    await UserModel.findByIdAndUpdate( id, userDate)
   return res.status(200).send({msg:"The user has been edited successfully"})
  } catch (error) {
    console.error
   return res.status(500).send({msg:"Error editing user"})
    
  }

}

const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    await UserModel.findByIdAndDelete(id)
    return res.status(200).send({msg:"The user has been removed"})
  } catch (error) {
    return res.status(500).send({msg:"Failed to delete user"})
  }

}

const getUser = async (req , res) =>{
  const { user_id:id } = req.user;
 
  try {
    const user =  await UserModel.findById(id);
    
    if (!user) {
      return res.status(404).send ({msg:"User not found"});     
  }
  return res.status(200).send(user)
  } catch (error) {
    console.error
     return res.status(500).send({msg:"Failed to find user"});
  }
}


const findUser = async(req , res) =>{
  const {id}=req.params
  try {
      const userSerch= await UserModel.findById(id)
      
          return res.status(200).send(userSerch)            
       
  } catch (error) {
      return res.status(400).send({msg:"User not found"})
      
  }

}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUser,
  findUser
};
