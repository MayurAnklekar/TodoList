const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();

app.set("view engine", "ejs");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(express.static(__dirname + "/public"));

mongoose
  .connect("mongodb+srv://admin-mayur:githubisamazing@cluster0.sgnjv.mongodb.net/blogs?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"));

  const userSchema = new mongoose.Schema({
    email:String,
    password:String
  });

  const User = mongoose.model("User", userSchema);


const todoSchema = new mongoose.Schema({
  todo:{
    type:String,
    required:true
  }
})

// app.get("/add", function(req, res){
//   const {todo}=req.body;
//     const newTodo=new Todo_model({todo})
//     if(todo==""){
//         res.redirect('/')
//     }
//     newTodo.save()
//     .then(()=>{
//         console.log("done")
//         res.redirect('/')
//     })
//     .catch(err=>console.log(err))
// })



app.get("/", function (req, res) {
  res.render("home");
});

app.get("/list", function (req, res) {
  
  res.render("list");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.listen(3000, function (req, res) {
  console.log("Server running");
});
