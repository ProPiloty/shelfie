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
        
        app.listen(SERVER_PORT, () => {
            console.log(`Server is listening on port ${SERVER_PORT}`);
        });
    })
    .catch(err => console.log(err));

// ENDPOINTS
app.get('/api/inventory', ctrl.getInventory); // GETS ALL PRODUCTS FROM DB
app.post('/api/product', ctrl.addProduct); // ADDS PRODUCT TO DB
app.delete('/api/product/:id', ctrl.deleteProduct) // DELETES A PRODUCT BY ID
app.put('/api/product/:id', ctrl.updateProduct) // UPDATES A PRODUCT BY ID