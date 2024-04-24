const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:bvBSmAb6o15AInRw@cluster0.oopo9qg.mongodb.net/paytm");

const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    lastName:String
});

const User=mongoose.model('User',userSchema);

module.exports={User}