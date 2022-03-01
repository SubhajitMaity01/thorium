const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    author:{
        author_id: Number,
        author_name:String,
        age:Number,
        address:String
    },
    Books:{
        name:String,
        author_id: Number,
        price: Number,
        ratings:Number

    }
 } ,   {timestamps: true});
 
module.exports = mongoose.model('Book', bookSchema)
