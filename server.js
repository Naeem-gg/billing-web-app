const express = require("express");
const app = express();

// app.use("link000");
app.listen(3000,()=>{
   console.log("Running expresss server using nodemon"); 
});

app.get("/",function (req,res) {
    res.send("<p>This is server using express</p>")
});
app.get("/about",(req,res)=>{
    // let file = "/index.html";
    res.sendFile(__dirname+"/index.html");
});