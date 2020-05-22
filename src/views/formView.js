const express = require("express");

const Form = require ("../models/forms");

const router = express.Router();

router.post("/forms", async (req, res)=>{
    const formData = req.body;
    try {
    const form = new Form (formData);
    await form.save();
    return res.status(201).send(form);
    } catch(error){
        res.status(400).send(error);
    } 

});
router.get("/forms", (req, res) => {
    Form.find({})
    .then((forms) => {
        return res.status(200).send(forms);
    })
    .catch((error) =>{
     return res.status(400).send(error);
    });
});
//fetching a single form
router.get ("./forms/:id",  async (req,res)=>{
    const id = req.params.id;
try{
const form = await Form.findById(id);
if(!form){
    return res.status(404).send({error: "form not found"});
}
res.status(200).send (form);
}
catch (error){
res.status(400).send(error);
}
});

//updating asingle todo
router.patch("/todo/:id", async (req, res)=>{
    let { isCompleted, text} = req.body;
    let {id} = req.params;
    try{
const todo = await Todo.findById(id);
if(!form){
    return res.status(404).send({error:"This todo item was not found"});
}
form.email = text;
form.name =text;
await form.save();
res.status(400).send(form);
    } catch(error) {
res.status(400).send(error);
    }
});

//deleting a todo
router.delete("/forms/:id", async (req, res)=>{
const{id} = req.params;
try{
const response = await Form.findByIdAndDelete(id);
res
.status(200)
.send({message:"form deleted succesfully!", data:response});
}catch (error){
res.status(400).send(error);
}
});

module.exports = router;