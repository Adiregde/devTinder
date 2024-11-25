const express = require('express');

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth.js");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req,res)=>{
    res.send('User data sent');
});

app.post("/user/login", (req,res)=>{
    res.send('User Logined successful');
});

app.get("/user/data", userAuth , (req,res)=>{
    res.send('USer sent the data');
});

app.use("/user",(req,res,next)=>{
    res.send('route handel one');
    next();
}, (req,res)=>{
    res.send('router handel 2');
});

app.listen(3006, ()=>{
    console.log('hello welcoem to 3006');    
});