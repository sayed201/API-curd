const mongoose = require('mongoose');

const Employe =mongoose.model('Employe',{
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    salary : {
        type:String,
        required:true
    }
    
})

module.exports = {Employe}