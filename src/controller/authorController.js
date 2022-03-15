const res = require("express/lib/response")
const AuthorModel= require("../model/authorModel")
const jwt=require("jsonwebtoken")

const createAuthor= async function (req,res){
    try{
        let author = req.body
        if(author==null){
            return res.status(401).send({status:false,msg:"plese fill the required data"})
        }
        else{
            let authorCreated = await AuthorModel.create(author)
            return res.status(200).send({status:true,data:authorCreated})
        }

    }

  catch(err){
      res.status(500).send({status:false,msg:err.message})

  }
}

const loginAuthor = async function(req,res){
    try{
        let email = req.body.email
        let password = req.body.password

        if(!email) return res.status(400).send({error:"Plese,enter the email Id"})
        if(!password) return res.status(400).send({error:"Plese,enter the password"})

        let author= await AuthorModel.findOne({email:email,password:password})
        if(!author)
         return res.status(404).send({
             status:false,
             msg:"username or password is not correct",
         })

         let token = jwt.sign({ authorId: author._id.toString()},"project")
         res.setHeader("x-api-key",token)
         res.status(200).send({status: "Author log-in successfully",data:token})





        
    }catch(err){
        return res.status(500).send(err.message)
    }
}


module.exports.createAuthor= createAuthor
module.exports.loginAuthor=loginAuthor