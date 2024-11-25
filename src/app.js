
const express = require('express');

const app = express();

app.get("/user",(req,res)=>{
    res.send({firstName: "Aditya", lastName: "Regde"});
})

app.post("/user", (req,res)=>{
    res.send('Data Successfully saved the database');
});

app.delete("/user", (req,res)=>{
    res.send('Data deleted successfully');
});

app.use("/test",(req,res)=>{
    res.send('hello wokring on test');
})


app.listen(3006, ()=>{
    console.log('hello welcoem to 3006');    
});