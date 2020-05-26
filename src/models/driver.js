const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema({
    
    email:{
        type: String,
                
    },
    Fullname:{
        type: String,
        required: true
    },
     mobile:{
     type: String,
     required: true
},
NIN:{
    type: String,
    required: true
            
},
BodaStageAddress:{
    type: String,
    required: true
},
 RecruitmentDate:{
 type: String,
 required: true
},
RecruitmentAdress:{
    type: String,
            
},
NextOfKin:{
    type: String
},
 NextOfKinContact:{
 type: String
},
referralName:{
    type: String
},
Status:{
    type: String
}
});
 const Driver = mongoose.model("Driver", driverSchema);
 module.exports = Driver;