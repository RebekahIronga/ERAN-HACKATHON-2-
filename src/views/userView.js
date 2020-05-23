const express = require("express");
const bcrypt = require ("bcryptjs");
const User = require('../models/userProfile');

const router = express.Router();

//create account
router.post ("/userProfile", async (req,res)=>{
    const UserData= req.body;
    try{
        const user = new User(UserData);
    await user.save();
    return res.status(201).send(user);
    } catch(error) {
        return res.status(400).send({error});  
    }
});

//login
router.post ("/userProfile/login", async (req,res)=>{
    const {email, password} = req.body;    
    
    const user = await User.findByCredentials(email, password);
    if (user.error){
    return res
    .status(404)
    .send ({error: user.error});
}
const token = await user.generateAuthToken();
res.status(200).send ({message: "Logged in  successfully!", user, token});
        
});

//view user profile
//router.get('/userProfile/profile', (req, res =>{

//}));




module.exports = router;