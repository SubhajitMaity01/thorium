const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    name: String,
	balance:Number, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender:{type:String,enum:["male","female","others"]}, // Allowed values argender: {e - “male”, “female”, “other”
	isFreeAppUser: {type:Boolean,default:false} // Default false value.
	},
   { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array