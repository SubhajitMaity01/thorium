const jwt= require("jsonwebtoken")
const blogModel=require("../model/blogModel")

const authentication = function(req,res,next){
    let isToken = req.headers["x-api-key"]
    if(!isToken){
        return res.status(400).send({ status:false,msg:"token must be present"})
    }

    let decodedToken= jwt.verify(isToken,"project")
    if(!decodedToken){
        return res.status(401).send({status:false,msg:"token is invalid"})
    }

    next();
}

const authorization= async function(req,res,next){
    let isToken = req.headers["x-api-key"]

    let decodedToken = jwt.verify(isToken,"project")
    let blogId = req.params.blogId
    if(!blogId) blogId = req.query.blogId
    if(!blogId) return res.status(400).send({error:"plese enter the blogId"})
    
    const data = await blogModel.find({_id:blogId})
    if(!data) return res.status(400).send({error:"Invalid blogId"})

    let authorId = await blogModel.find({_id:blogId}).select({authorId : 1 , _id:0})
    authorId = authorId.map(x => x.authorId)

    if(decodedToken.authorId != authorId){
        return res.status(403).send({error:"Log in author is not to change the request userId"})
    }
    next();
}


module.exports.authentication=authentication
module.exports.authorization=authorization