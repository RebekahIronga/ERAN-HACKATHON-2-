const express = require("express");
const bcrypt = require ("bcryptjs");
const User = require("../models/userProfile");
const auth = require("../middleware/auth");

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
    try{
    const user = await User.findByCredentials(email, password);
    if (user.error){
    return res
    .status(404)
    .send ({error: user.error});
}
const token = await user.generateAuthToken();
res.status(200).send ({message: "Logged in  successfully!", user, token});
} catch(error){
return res.status(404).send({error})
   }}     
);

//view user profile
router.get('/userProfile/profile', auth, (req, res) =>{
res.status(200).send(req.user);
});




module.exports = router;