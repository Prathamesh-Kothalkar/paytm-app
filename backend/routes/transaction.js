const express=require('express');
const { authMiddleWare } = require('../Auth/middleware');
const { Transaction } = require('../db');
const router=express.Router();


router.get("/",authMiddleWare,async(req,res)=>{
    const trx = await Transaction.find({
        $or:[{
            senderId:req.userId
        },{
            reciverId:req.userId
        }]
    })

    res.json({
        trx:trx
    })
})




module.exports = router