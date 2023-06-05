// Requires
const express = require('express');
const path = require('path');

// Security settings 
require('dotenv').config({path : "./config/.env"});

// Express settings
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.enable('trust proxy');

// Routes
const emailRoutes = require("./routes/email");

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api", emailRoutes);


module.exports = app;