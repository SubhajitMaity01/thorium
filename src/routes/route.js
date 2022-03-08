const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const OrderController= require("../controllers/orderController")
const ProductController = require("../controllers/productController")

let middleware1= function(req,res,next){
    req.headers.isFreeAppUser = 'isFreeAppUser'
    if(req.headers.isFreeAppUser=='isFreeAppUser')
    next()
    else
    res.send("Header is not present")
}




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser",UserController.createUser)
router.post("/createProduct",ProductController.createProduct)
router.post("/createOrder",OrderController.createOrder)
router.get("/getUser",middleware1,UserController.getUser)
router.get("/getProduct",middleware1,ProductController.getProduct)
router.get("/getUser",OrderController.middleware2,OrderController.createOrder)




module.exports = router