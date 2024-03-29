const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {
    var a=Number(req.body.a);
    var op=req.body.op;
    var b=Number(req.body.b);
    console.log(a);
    console.log(b);
    console.log(op);
    var result=0;
    if (op=='+') result=a+b;
    else if (op=='-') result=a-b;
    else if (op=='*') result=a*b;
    else if (op=='/') result=a/b;
    else result=404;
    if (result==404) res.send("Can't calculate. Not found.");
    else res.send("The answer is " + result);
});

app.get("/bmicalculator",function(req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res) {
    var height=parseFloat(req.body.height);
    var weight=parseFloat(req.body.weight);
    var result=weight/(height*height);
    res.send("Your BMI is " + result);
});

app.listen(3000,function() {
    console.log("Server started on port 3000.");
});