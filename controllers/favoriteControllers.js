const FavoritesModel = require("../models/favorite")

const createFavorites = async (req , res) =>{
   const { 
    user_id,
    product_id,
   }=req.body


   const newFavorites = new FavoritesModel({
    user_id,
    product_id,
   })
   try {
        const favorite = await newFavorites.save()
        console.log(favorite);
        return res.status(200).send(favorite)
   } catch (error) {
        console.error(error)
        return res.status(500).send({msg:"El producto ya existe en la base"});
        
    }
}
const deleteFavorites = async (req , res) =>{
    console.log(req.params);
    const { id } = req.params
    try {
        await FavoritesModel.findByIdAndDelete(id)
        return res.status(200).send({msg:"Product successfully deleted"})
    } catch (error) {
        res.status(400).send({msg:"Product could not be removed"})
    }
}

const getFavorites = async (req , res) =>{
    try {
        const favorites = await FavoritesModel.findById(req.params.id).populate("producto");
        if (favorites) {
            return res.status(200).send(favorites);
        }else{
            return res.status(200).send([]);
        }
    } catch (error) {
        console.error(error)
        res.status(500).send(error);
    }
}

module.exports={
    createFavorites,
    deleteFavorites,
    getFavorites
}