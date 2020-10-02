/* Including Express */
const express = require('express');

/* Firing Express to Include Modules to app */
const app = express();

/* Including body parser */
const bodyParser = require('body-parser');

/* Including mongoose for communicating to data base */
const mongoose = require('mongoose');

/* Adding path */
const path = require('path');

/* Setting Templating engine */
app.set('view engine' , 'ejs');

/* Express body parser */
app.use(express.urlencoded({ extended: true }));

/* Access to static files */
app.use(express.static(path.join(__dirname + '/public')));


/* Routes */
app.use('/', require('./routes/users.js'));

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});