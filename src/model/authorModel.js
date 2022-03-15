const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    firstName: {
        type:String,
        require:true
    },
    lastName:{
        type: String,
        require:true
    },

    tytle: {
        type: String,
        enum: ["male", "female", "other"],
        require:true
    },

    emailId:{
        type:String,
        unique:true,
        trim:true,
        require:true,
        lowercase:true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Plese fill a valid email adderss ']

    },

    password:{
        type:String,
        require:true
    }
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)