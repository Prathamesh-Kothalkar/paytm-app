const express = require('express');
const router = express.Router();
const signupBody = require("../Validtion/signup.js")
const signinBody = require("../Validtion/signin.js")
const { User,Account } = require("../db.js")
const jwt = require("jsonwebtoken"); 
const { JWT_SECRET } = require('../config');
const {authMiddleWare} = require("../Auth/middleware.js")
const updateBody = require('../Validtion/updateData.js');

router.post("/signup",async (req, res) => {    
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Invalid Input",
        })
    }

    const isUserExist = await User.findOne({
        username: req.body.username
    })

    if (isUserExist) {
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;

    await Account.create({
        userId,
        balance:1+Math.random()*1000
    })



    const token = jwt.sign({ userId }, JWT_SECRET);

    res.json({
        message: "User Created Sucessfully",
        token: token
    })

})


router.post("/signin",async (req, res) => {

    const { success } = signinBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Invalid Input",
            data:req.body
        })
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (!user) {
        res.status(411).json({
            message: "User not found"
        })
        return
    }

    const token = jwt.sign({
        userId: user._id
    }, JWT_SECRET)

    res.json({
        token: token
    })

})

router.put("/",authMiddleWare,async (req,res)=>{
    const {success}=updateBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message:"Invalid Data"
        })
    }

    await User.updateOne({
        _id:req.userId
    },req.body)

    res.status(200).json({
        message:"Updated Sucessfully"
    })

})

router.get("/",async (req,res)=>{
    const query=req.query.filter||" ";

    const users = await User.find({
        $or:[{
            firstName:{
                "$regex":query
            },
            firstName:{
                "$regex":query
            },
        }]
    })

    res.status(200).json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id

        }))
    })


})


module.exports = router;