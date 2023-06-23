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
    res.render("home");
})

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})


