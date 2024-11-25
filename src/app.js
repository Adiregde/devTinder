
const express = require('express');

const app = express();

app.use("/home",(req,res)=>{
    res.send('hello wokring on 3006');
})

app.use("/test",(req,res)=>{
    res.send('hello wokring on test');
})

app.use("/",(req,res)=>{
    res.send('hello wokring on moan page');
})

app.listen(3006, ()=>{
    console.log('hello welcoem to 3006');    
});