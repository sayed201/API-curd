const express =require('express')

const router = express.Router()

const { Employe } = require('../config/model/employee')


router.get('/api/employee',(req,res)=>{
    Employe.find({},(err,data)=>{
        if(!err){
            res.send(data)
        }else{
            console.log(err);
        }
    })
})
    
module.exports = router;