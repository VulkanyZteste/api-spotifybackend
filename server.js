require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const routerGetUsers = require('./routes/getUsers');
const routerLogin = require('./routes/login');
const routerAuth = require('./routes/auth');

// Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(routerGetUsers);
app.use(routerLogin);
app.use(routerAuth);


// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.emit('ready');
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(error);
    });


// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Server
app.on('ready', () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    });
});