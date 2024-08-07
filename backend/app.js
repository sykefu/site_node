const express = require('express');
const app = express();
const userRoutes = require('./routes/user')
const stuffRoutes = require('./routes/stuff')
const cookieParser = require('cookie-parser')
app.use(express.json());
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/data', express.static(path.join(__dirname, 'data')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    next();
  });
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO/*,
{ useNewUrlParser: true,
    useUnifiedTopology: true }*/)
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes)



 module.exports = app;