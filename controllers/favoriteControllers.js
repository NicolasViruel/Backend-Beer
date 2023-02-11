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
    console.error(error);
    return res.status(400).send({msg:"Error al intentar crear el producto, producto existente o mal cargado"})

   }
}

module.exports={
    createFavorites,
}