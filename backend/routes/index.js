const express=require('express');
const router=express.Router();
const zod =require("zod")
const userRouter = require("./user");
const accountRouter = require("./account");
const transactionRouter=require("./transaction");
router.use("/user",userRouter)
router.use("/account",accountRouter)
router.use("/transaction",transactionRouter);

module.exports=router;