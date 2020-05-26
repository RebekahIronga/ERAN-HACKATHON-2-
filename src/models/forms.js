const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    password:{
        type: String,
        required: "This field is required",
        unique: true
    },
    email:{
        type: String,
        required: "This field is required"
        
    },
    Fullname:{
        type: String,
        required: true
    },
     mobile:{
     type: String,
     required: true
},
});
//formSchema.path('email'.validate((val)=>{
  //  emailRegex= /

//return emailRegex.test(val);
//'Invalid e-mail.);}
 const Form = mongoose.model("Form", FormSchema);
 module.exports = Form;