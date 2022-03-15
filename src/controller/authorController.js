const res = require("express/lib/response")
const AuthorModel= require("../model/authorModel")

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

module.exports.createAuthor= createAuthor