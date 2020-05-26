const express = require("express");
const router = express.Router();
const mongoose = require ('mongoose');
const Form = require("../models/driver");

router.get('/', (req,res)=>{
    res.render("src/driverForm");
});

router.post("/driver", async (req, res)=>{
    if(req.body._id =='')
    insertRecord(req,res);
    else
    updateRecord(req,res);
});
function insertRecord(req,res){
    var driver = new Driver();
    driver.fullName = req.body.fullName;
    driver.email = req.body.email;
    driver.mobile = req.body.mobile;
    driver.city =req.body.status;
    driver.fullName = req.body.Status;
    driver.email = req.body.email;
    driver.mobile = req.body.mobile;
    driver.city =req.body.city;
    driver.fullName = req.body.fullName;
    driver.email = req.body.email;
    driver.mobile = req.body.mobile;
    driver.city =req.body.city;
    driver.save((err, doc)=>{
        if(!err)
        res.redirect('driver/list');
        else{
            if(err.name ==ValidationError){
            handleValidationError(err, req.body);
            res.render("src/driverForm");
        }
            else
            console.log('Error during record insertion:' + err);
        }
    });
    }
    
    function updateRecord(req,res){
        form.findOneAndUpdated ({_id:req.body._id}, req.body,{new: true}, (err, doc)=>{
            if (!err){ res.redirect('driver/list');}
            else{
                if(err.name =='ValidationError'){
                    handleValidationError(err, req.body);
                    res.render("src/driverForm");
                }
            }
        });
    }
    router.get('./list',(req,res)=>{

        form.find((err, doc)=>{
            if(!err){
                res.render("driver/list");
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
                res.render("src/driverForm");
            }
        });
    });
    
    router.get('/delete/:id', (req, res)=>{
        form.findByIdAndremove(req.params.id, (err,doc)=>{
            if(!err){
                res.redirect('/driver/list');
            }
            else{console.log('Error in form delete:'+ err);}
        });
    });
    
    
    module.exports=router;
    