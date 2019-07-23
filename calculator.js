const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res) {
    console.log(req.body);
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

app.listen(3000,function() {
    console.log("Server started on port 3000.");
});