const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let user= req.body
    let IsFreeAppUser = req.body.isFreeAppUser
    if(!IsFreeAppUser){
        req.send("the request is missing a mandatory Header")
    }
    let savedData= await UserModel.create(user)
    console.log(req.newAtribute)
    res.send({msg: savedData})
} 

const getUser=async function(req,res){
    
        let user=req.body
        let userId = await UserModel.findById(user)
        if(!userId){
            res.send("User id is not valid")
        }
        let data = await UserModel.get(user)
        res.send({msg: data})
    


}



module.exports.createUser= createUser
module.exports.getUser=getUser
