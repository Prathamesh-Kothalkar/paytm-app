const express=require('express');
const router=express.Router();
const zod =require("zod")
const userRouter = require("./user");
router.use("/user",userRouter)


module.exports=router;