const express = require('express');
const bcrypt = require('bcrypt');
const {pg } = require('pg');
const app = express();
const pg = require('./db');

app.listen(3000, () => {
    console.log("Listening on the port")
});
//Middleware
app.use(express.json());
app.use(express.urlencoded,{extended: true});

const db = new pg({
    user 
})
