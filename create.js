//models/user.js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email : {
        type:String,
        required :true,
        unique:true
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    }
});

module.exports = mongoose.model('user',userSchema);

//controllers/users.js

const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.createUser = (req,res) =>{
    bcrypt.hash(req.body.password, 10)
    .then(hash => User.create({
        email:req.body.email,
        password:hash,
    }))
    .then((user)=>res.send(user))
    .then((err)=>res.status(400).send(err));
}
