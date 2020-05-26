const mongoose = require("mongoose");
//var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/";

const db =mongoose.connect("mongodb://localhost:27017/formDB", 
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});



if(!db){
    console.log("Error connecting to database");
} else{
    console.log("Successfully connecting to database");
}