const { count } = require("console")
const axios =require("axios")
const res = require("express/lib/response")
const authorModel = require("../model/authorModel")
const blogModel= require("../model/blogModel")
const { isAsyncFunction } = require("util/types")
const moment = require("moment")

const createBlog = async function(req, res){
    try{
        let blog = req.body
        let authorId = blog.authorId
      //validation a
        if(!blog) return res.status(400).send('The request is not valid as the author details are required.')

      //validation b
        let author = await authorModel.findById(authorId)
        if(!author) return res.status(400).send('The request is not valid as no author is present with the given author id')

        let blogCreated = await blogModel.create(blog)
       return res.status(200).send({data: blogCreated})
    }
    catch(err){
        return res.status(500).send({status:false,msg:err.message})
    }


}

const getBlogs= async function (req, res) {
    try{
        let authorId = req.query.authorId
        let category = req.query.category
        let blogCollection = await blogModel.find({authorId:authorId,category:category}).populate('authorId')
        // let blogCollection = await blogModel.find(data,{isDeleted:false},{isPublished:true}).populate("authorId")
       if(!blogCollection){
           return res.status(404).send({status:false,msg:"not found"})
      }else{
        return res.status(200).send({data: blogCollection})
      }
    }catch(err){
        return res.status(500).send({status:false,msg:err.message})

    }
}


const updatedBlog= async function(req,res){
    try{
        let data = req.body
        const id = req.params.blogId

        if(!id) {
            return res.status(400).send({error:"please enter id in params"})
            
        }
        if(!data){
            return res.status(400).send({error:"enter some data to update"})
        }
        const timeDate = moment()
        const dataForUpdation = { ...data, isDeleted:true, deletedAt:timeDate}
        const updatedData=await blogModel.findOneAndUpdate({_id:id},{$set:dataForUpdation},{new:true})
        if(!updatedData){
            return res.status(404).send({error:"No such data found"})
        }
        res.status(200).send({ msg: updatedData})
    }
    catch(err){
        return res.status(500).send(err.message)

    }

}

const deleteBlog= async function(req,res){
    try{
        let blogId=req.params.blogId
        if(!blogId){
            return res.status(400).send({error:"blogId should be present in params"})
        }
        const data = await blogModel.find({_id:blogId})
        if(!data){
            return res.status(400).send({error:"Invalid blogid"})
        }
        const timeDate=moment()
        const dataForUpdation = { ...data, isDeleted:true, deletedAt: timeDate}
        let deletedBlog=await blogModel.findByIdAndUpdate({_id:blogId},dataForUpdation,{new:true})
        return res.status(200).send({status:"Deleted",data:deletedBlog })

    }
    catch(err){
        res.status(500).send(err.message)


    }
}


const  deleteNewBlog=async function(req,res){
    try{
        const data = req.query
        if(!data){
            return res.status(400).send({error:"Invalid blogid"})
        }
        const timeDate=moment()
        let result =await blogModel.updateMany(data,{ isDeleted:true,deletedAt:timeDate}, {new:true})
        if(!result){
            return res.status(400).send({error:"No data found"})
        }
        return res.status(200).send({status:"Deleted",data:result })

    }catch(err){
        return res.status(500).send(err.message)
    }
}







module.exports.createBlog=createBlog
module.exports.getBlogs=getBlogs
module.exports.updatedBlog=updatedBlog
module.exports.deleteBlog=deleteBlog
module.exports.deleteNewBlog=deleteNewBlog 