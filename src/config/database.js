const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://adiregde118:Testing!2@cluster0.c1xmy.mongodb.net/devTinder");
};

module.exports = connectDB;
