const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const blogSchema = new mongoose.Schema( {
    tytle:{
        type:String,
        required:true
    },

    body:{
        type:String,
        required:true
    },
    authorId:{
        type:ObjectId,
        required:true,
        ref:"Author"
    },
    tags:[String],
    category:[{type:String,required:true}],
    subCategory:[{type:String}],
    createdAt:Date,
    updatedAt:Date,
    deletedAt:Date,
    isDeleted:{
        type: Boolean,
        default:false
    },
    publishedAt:Date,

    isPublished:{
        type:Boolean,
        default:false

    }





}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema)