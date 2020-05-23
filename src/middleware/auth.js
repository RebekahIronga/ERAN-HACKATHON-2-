const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("../models/userProfile");

const auth = async (req, res, next) =>{
    const token = req.header("Authorization").replace("Bearer", "");
    const data = jwt.verify(token, "AtaleOfTwoCities");
    const {id, email} = data;
    const user = await User.findOne({id:_id, email, role: user.role});

    if(!user){
        return res.status(401).send({message: "Unauthorized"});
    }
    req.user = user;
    req.token = token;
    next();
}

module.exports = auth;
