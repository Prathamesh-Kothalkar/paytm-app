const express = require('express');
const {authMiddleWare}=require("../Auth/middleware")
const {Account}=require("../db");
const { default: mongoose } = require('mongoose');
const router = express.Router();

router.get("/balance",authMiddleWare,async (req,res)=>{
     const account=await Account.findOne({
        userId:req.userId
     })

     res.status(200).json({
        balance:account.balance
     })
})

router.post("/transfer",authMiddleWare,async (req,res)=>{
    const {amount,to}=req.body;
    //we use mongoose-session for transaction
    const session = await mongoose.startSession()
    session.startTransaction();

    //fetching account of user
    const account=await Account.findOne({
        userId:req.userId
    }).session(session);

    if(!account || account.balance<amount){
        await session.abortTransaction();
        return res.status(400).json({
            message:"Insufficient Balance"
        })
    }

    //checks is reciver present in account
    const reciverAcc=await Account.findOne({
        userId:to
    }).session(session);

    if(!reciverAcc){
        await session.abortTransaction();
        return res.status(401).json({
            message:"Invalid Account Number"
        })
    }

    //Doing Transaction
    //debited from user
    await Account.updateOne({
        userId:req.userId
    },{
        $inc:{
            balance:-amount
        }
    }).session(session)

    //credited to reciever
    await Account.updateOne({
        userId:to
    },{
        $inc:{
            balance:amount
        }
    }).session(session)

    //commit transaction
    await session.commitTransaction();
    res.status(200).json({
        message:"Transcation Successful"
    });
})
module.exports = router