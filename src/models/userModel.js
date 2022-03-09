const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isDeleted:{type:Boolean,default:false},
    age: Number,
    mobile: {
        type: String,

        required: true
    },
    emailId: String,
    password:String,
    posts: {type: [], deafult: []}
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema)
