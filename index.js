const express = require('express');
const app = express();
const port = process.env.PORT ||  8000;
const path = require('path');
const ejs = require('ejs');
app.use(express.static('public'));
app.use(express.json());

const connectDB = require('./config/db');
connectDB();

//Template engine
app.set('views',path.join(__dirname , '/views'));
app.set('view engine','ejs');

//Routes
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));


app.listen(port,()=>{ 
    console.log('server is running on port ',port);
})