const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:bvBSmAb6o15AInRw@cluster0.oopo9qg.mongodb.net/paytm");

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
});

const accountSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    balance:Number
})

const transactionSchema =mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: Number,
    type: {
        type: String,
        enum: ['debit', 'credit'],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});



const User=mongoose.model('User',userSchema);
const Account=mongoose.model("Acoount",accountSchema);
const Transaction=mongoose.model("Transaction",transactionSchema);

module.exports={User,Account,Transaction}