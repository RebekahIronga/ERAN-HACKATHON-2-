const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/userProfile");

const auth = async (req, res, next) =>{
    const token = req.header("Authorization").replace("Bearer", "");
    const data = jwt.verify(token, "AtaleOfTwoCities");
    const {_id, email} = data;
    const user =User.findOne({_id, email});

    if(!user){
        return res.status(401).send({message: "Unauthorized"});
    }
}

module.exports = auth;
