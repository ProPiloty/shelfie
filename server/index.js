require('dotenv').config();
const express = require('express');
const massive = require('massive');

const { SERVER_PORT, CONNECTION_STRING } = process.env;

// CONTROLLERS
const ctrl = require('./controller');

const app = express();
app.use(express.json());

// SERVER AND DATABASE CONNECTION
massive(CONNECTION_STRING)
    .then(database => {
        app.set('db', database);
        console.log('Database connection running');
        
        app.listen(4000, () => {
            console.log(`Server is listening on port 4000`);
        });
    })
    .catch(err => console.log(err));

// ENDPOINTS