const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        
    }
});
 const Form = mongoose.model("Form", FormSchema);
 module.exports = Form;