const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const path = require('path');
const formView = require('./view/formView');
const userView = require ('./view/userView');
const driverView = require('./view/driverView');


const port = process.env.PORT || 8080;

const app = express();


app.use(cors());
app.use(express.json());
app.use('/form', formView);
app.use('/user',userView);
app.use('/driver', driverView);


//send login page
app.get ('/', function (req, res) {
    res.sendfile ("index.html");
});

 //send registration form

app.get ('/registration', function (req, res){
    res.sendfile ("registration.html");
});

app.get ('/registration', function (req, res){
  res.sendfile ("driverRegister.html");
});



app.get("/", (req, res) => {
 res.status(200).send({message: "welcome to our REST API."});
});

app.listen(port, ()=> {
  console.log(`server starts at ${port}`);
});