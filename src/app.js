const express = require('express');
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");

app.post("/signup", async (req,res) => {

    //creating a new instance of the USer model
    const user = new User({
        firstName: "Deepak",
        lastName: "Agarwal",
        emailId: "depkagarwl@gamil.com",
        password: "deepak123",
        age: 24,
        gender: "Male"
    });

    try {
        await user.save();
        res.send("Data is getting stored in the database");
    } catch (error) {
        res.status(400).send("USer data is not getting stored");
    }
});


connectDB()
.then(() => {
    console.log("database connected success....");
    app.listen(3000, ()=>{
        console.log('Server is connected to the port 7777');    
    });
})
.catch((err)=>{
    console.log("database cannot connect. Please check the connection");  
});
