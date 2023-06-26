const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const collection = require("./mongodb");
const port = process.env.PORT || 3000;

const templatePath = path.join(__dirname,'../templates');
const assetsPath = path.join(__dirname,'../assets');
const publicPath = path.join(__dirname,'../public');

app.use(express.json())
app.set("view engine","hbs")
app.set("views",templatePath)
app.use(express.urlencoded({extended:false}))
app.use(express.static(publicPath))
app.use(express.static(assetsPath))

app.get("/",(req,res)=>{
    res.render("login");
})

app.post("/registration",async(req,res)=>{
    const data = {
        fullName:req.body.fullName,
        userName:req.body.userName,
        password:req.body.password,
        email:req.body.email,
        role:req.body.role,
        enterprise:req.body.enterprise,
        registrationType:req.body.registrationType,
        state:req.body.state,
        address:req.body.address,
        department:req.body.department,
        employerID:req.body.employerID
    }
    await collection.insertMany([data])
    res.render("login")
})

app.post("/login",async(req,res)=>{
    try{
        const check = await collection.findOne({userName:req.body.userName})
        if(check.password===req.body.password){
            res.render("success")
        }
        else{
            res.send("wrong password")
        }
    }
    catch{
        res.send("wrong details")
    }
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})


