const express = require("express");

const ejs = require("ejs");
const app = express();

app.set('view engine', 'ejs');


app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("list");
    
})

app.listen(3000, function(req, res){
    console.log("Server running");
})