const ProductosModel = require("../models/producto")
//obtener los productos de la Base:
const getProducts = async (req , res) =>{
    try {
        const productos= await ProductosModel.find()
        if (productos) {
            return res.status(200).send(productos)            
        } else{
            return res.status(200).send([])
        }
    } catch (error) {
        return res.status(200).send({msg:"Fallo al intentar optener los productos"})
        
    }
     
}
//crear los productos de la Base:
const createProducts = async (req , res) =>{
 console.log(req.body);
  //traemos la info del servidor:
  const{
  ProductName,
  Productdetalle,
  PriceProduct,
  ImgURL,
  Category,
  Graduation,
  Avaliable}=req.body
  //creamos el producto:
  const newProducto = new ProductosModel({
  ProductName,
  Productdetalle,
  PriceProduct,
  ImgURL,
  Category,
  Graduation,
  Avaliable
  })
  try {
    const producto = await newProducto.save()
    console.log(producto);
    return res.status(200).send(producto)
  } catch (error) {
    console.log(error);
    return res.status(400).send({msg:"El producto ya existe"})
    
  }
}
//editar los productos de la Base:
const updateProducts = (req , res) =>{
  
}
//borrar los productos de la Base:
const deleteProducts = (req , res) =>{
  
}
//buscar los productos de la Base:
const findProducts = (req , res) =>{
  
}

module.exports={
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts,
    findProducts
}
