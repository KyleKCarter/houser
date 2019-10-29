require('dotenv').config();
const express = require('express');
const massive = require('massive');

const app = express();

const {CONNECTION_STRING, SERVER_PORT} = process.env;

massive(CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('Database Connected')
    })
    .catch(error => {
        console.log(error)
    })

app.use(express.json());

app.listen(5000, () => console.log(`Running on PORT 5000`));
// app.listen(SERVER_PORT, () => console.log(`Running on PORT ${SERVER_PORT}`));