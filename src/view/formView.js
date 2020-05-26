const express = require("express");
const router = express.Router();
const mongoose = require ('mongoose');
const Form = require("../models/forms");


router.get('/', (req,res)=>{
    res.render("src/recruiterForm");
});

router.post("/forms", async (req, res)=>{
    if(req.body._id =='')
    insertRecord(req,res);
    else
    updateRecord(req,res);
});
function insertRecord(req,res){
    var form = new Form();
    form.fullName = req.body.fullName;
    form.email = req.body.email;
    form.mobile = req.body.mobile;
    form.password =req.body.password;
    form.save((err, doc)=>{
        if(!err)
        res.redirect('form/list');
        else{
            if(err.name ==ValidationError){
            handleValidationError(err, req.body);
            res.render("src/recruiterForm");
        }
            else
            console.log('Error during record insertion:' + err);
        }
    });
    }
    
    function updateRecord(req,res){
        form.findOneAndUpdated ({_id:req.body._id}, req.body,{new: true}, (err, doc)=>{
            if (!err){ res.redirect('form/list');}
            else{
                if(err.name =='ValidationError'){
                    handleValidationError(err, req.body);
                    res.render("src/recruiterForm");
                }
            }
        });
    }
    router.get('./list',(req,res)=>{

        form.find((err, doc)=>{
            if(!err){
                res.render("form/list");
            } else {
                console.log('Error in retrieving list:' + err)
            }
        })
    });
    function handleValidationError(err,body){
        for( field in err.errors){
            switch(err, errors[field].path){
                case 'fullName':
                    body['fullNameError'] = err.erros[field].message;
                    break;
                    body['emailError'] = err.erros[field].message; 
                default:
                    break;
            }
        }
    }

    router.get('/:id', (req, res)=>{
        form.findById(req.params.id,(err,doc)=>{
            if(!err){
                res.render("src/recruiterForm");
            }
        });
    });
    
    router.get('/delete/:id', (req, res)=>{
        form.findByIdAndremove(req.params.id, (err,doc)=>{
            if(!err){
                res.redirect('/form/list');
            }
            else{console.log('Error in form delete:'+ err);}
        });
    });
    
    
    module.exports=router;
    
    
  