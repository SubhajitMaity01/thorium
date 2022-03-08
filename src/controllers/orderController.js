const { count } = require("console")
const res = require("express/lib/response")
const orderModel = require("../models/orderModel")
const productModel= require("../models/productModel")
const userModel = require("../models/userModel")
const createOrder= async function (req, res) {
    let order = req.body
    let userId = order.user
    let productId = order.product

    //validation a
    if(!userId) return res.send('The request is not valid as the author details are required.')

    //validation b
    let user = await userModel.findById(userId)
    if(!userId) return res.send('The request is not valid as no author is present with the given author id')

    //validation c
    if(!productId) return res.send('The request is not valid as the publisher details are required.') 

    //validation d
    let product = await productModel.findById(productId)
    if(!productId) return res.send('The request is not valid as no publisher is present with the given publisher id')

    let orderCreated = await orderModel.create(order)
    return res.send({data: orderCreated})
}




let middleware2 = function(req,res,next){
    req.headers.isFreeAppUser = 'isFreeAppUser'
    if(req.headers.isFreeAppUser=='isFreeAppUser')
    next()
    else
    res.send("Header is not present")

    //check Validation
    if(req.headers.isFreeAppUser=="isFreeAppUser")
    {
        let userId = req.body.userId
        let productId = req.body.productId
        
        //check userid
        if(!userId){
            res.send("User Id not Valid")
        }
        //check Product Id
        if(!productId)
        {
            res.send("Product id not Valid")
        }

        //check user in Database
        let user= userModel.findById(userId)
        if(!user){
            res.send("No user is present")
        }

        
    }
//check header value
    req.headers.isFreeAppUser="false"
    if(req.headers.isFreeAppUser==false)
    {
        let productPrice = product.price
        let userbalance = user.balance
//check balance
        if(productPrice>userbalance)
        {
            res.send("insufficient balance")

        }
        else{
            //update userbalance is freeAppUser default false
            let remainingUserBalance=userbalance-productPrice
            const a =  userDetailsModel.updateMany(
                { user:{$in: userId}},
                { balance: remainingUserBalance}
            )

        }
    }
    else//if isfreeApUser==true only update it true
    {
        const b=  userModel.updateMany(
            {user: { $in:userId}},
            {isFreeAppUser:true}
        )

    }
//all condition satisfy
        let order=req.body
        const SavedOrder= orderModel.create(order)
        res.send({"Order Sucessfull ": SavedOrder})
    
}


module.exports.createOrder=createOrder
module.exports.middleware2=middleware2