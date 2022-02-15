require('dotenv').config();

const mongoose = require('mongoose');

function connectDB(){

    mongoose.connect(process.env.MONGO_CONNECTION_URL);
    console.log("connected to db");
}

module.exports = connectDB;