const ProductModel= require("../models/productModel")

const createProduct= async function (req, res) {
    let product= req.body
    let SavedData= await ProductModel.create(product)
    console.log(req.newAtribute)
    res.send({msg: SavedData})
}

const getProduct=async function(req,res){
    
    let product=req.body
    let productId = await ProductModel.findById(product)
    if(!productId){
        res.send("Product is not valid")
    }
    let Data = await productModel.get(user)
    res.send({msg: Data})



}







module.exports.createProduct= createProduct
module.exports.getProduct=getProduct