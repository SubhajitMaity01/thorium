const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
const userController=require("../controllers/userController")

const middleware1 = function(req,res,next){
let token =req.headers['x-auth-token']
let validToken = jwt.verify(token,"functionup-thorium")

if(!validToken){
    res.send("Token is invalid")
}
next()
}

module.exports.middleware1=middleware1;
