const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const formView = require('./views/formView');
const userView = require ('./views/userView');


const port = process.env.PORT || 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use(formView);
app.use(userView);



//send login page
//app.get ('/', function (req, res) {
  //  res.sendfile ("index.html");
//});

// send registration form

//app.get ('/registration', function (req, res){
  //  res.sendfile ("registration.html");
//});


app.get("/", (req, res) => {
    res.status(200).send({message: "welcome to our REST API."});
});

app.listen(port, ()=> {
    console.log(`server starts at ${port}`);
});