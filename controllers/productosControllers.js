const ProductosModel = require("../models/producto")
//obtener los productos de la Base:
const getProducts = async (req , res) =>{
    const query = req.query
    const { name, detalle} = query
    try {
        let productos
        if (name || detalle) {
            let search
            if (name && detalle) {
                console.log(name , detalle)
                search ={   $or: [
                    {'ProductName' : { "$regex": name, "$options": "i" }},
                    {'Productdetalle' : { "$regex": detalle, "$options": "i" }}
                 ]}
                // search = {'ProductName' : { "$regex": name, "$options": "i" }, 'Productdetalle' : { "$regex": detalle, "$options": "i" } } 
                 
            } else if (detalle) {
                search = {'Productdetalle' : { "$regex": detalle, "$options": "i" } } 
                
            }else if(name) {
                console.log(name)
                
                search = { "ProductName": { "$regex": name, "$options": "i" } }
                 
            }
            console.log(search)

            productos  = await ProductosModel.find(search)
        } else {
            productos= await ProductosModel.find()
        }
         
        if (productos) {
            return res.status(200).send(productos)            
        } else{
            return res.status(200).send([])
        }
    } catch (error) {
        return res.status(400).send({msg:"Fallo al intentar optener los productos"})
        
    }
     
}

const createProducts = async (req , res) =>{
 console.log(req.body);

  const{
  ProductName,
  Productdetalle,
  PriceProduct,
  ImgURL,
  Category,
  Graduation,
  Avaliable}=req.body

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
    console.error
    return res.status(400).send({msg:"Error al intentar crear el producto, producto existente o mal cargado"})
    
  }
}

const updateProducts = async (req , res) =>{

const {id}=req.params

const productoData = req.body
try {

const productoDB = await ProductosModel.findById(id)

await ProductosModel.findByIdAndUpdate(id,productoData)
res.status(200).send({msg:"Producto actualizado correctamente"})

} catch (error) {
    res.status(400).send({msg:"El Producto no pudo ser actualizado"})
    
}    
  
}

const deleteProducts =  async(req , res) =>{
    const {id} =req.params
    try {
        await ProductosModel.findByIdAndDelete(id)
        return res.status(200).send({msg:"Producto borrado correctamente"})
    } catch (error) {
        res.status(400).send({msg:"El Producto no pudo ser eliminado"})
        
    }
  
}

const findProducts = async(req , res) =>{
    const {id}=req.params
    try {
        const productosBuscado= await ProductosModel.findById(id)
        
            return res.status(200).send(productosBuscado)            
         
    } catch (error) {
        return res.status(400).send({msg:"Producto no encontrado"})
        
    }

}

module.exports={
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts,
    findProducts
}
