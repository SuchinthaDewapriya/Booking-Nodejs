const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
const layouts = require('express-ejs-layouts');

//view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//layouts
app.use(layouts);
app.set('layout', 'layout')

//routes
const userRoutes = require('./routes/userRoutes');
app.use('/', userRoutes);

//db connect
connectDB();

app.use(express.urlencoded({ extended: true }));

module.exports = app;