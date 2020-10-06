/* Including Express */
const express = require('express');

/* Firing Express to Include Modules to app */
const app = express();

/* Including body parser */
const bodyParser = require('body-parser');

/* Including mongoose for communicating to data base */
const mongoose = require('mongoose');

/* Including passport for authentication */
const passport = require('passport');

/* Including flash for message display */
const flash = require('connect-flash');

/* Including express sessions */
const session = require('express-session');

/* Adding path */
const path = require('path');

/* Setting Templating engine */
app.set('view engine' , 'ejs');

/* Passport Config */
require('./config/passport')(passport);

/* Database config */
require('dotenv').config();
const uri = process.env.mongodburl;
/* Connect to MongoDB */
mongoose.connect(uri,{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false});

/* Express body parser */
app.use(express.urlencoded({ extended: true }));

/* Express session */
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
);

/* Passport middleware */
app.use(passport.initialize());
app.use(passport.session());

/* Middleware to connect flash */
app.use(flash());

// Global variables
app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


/* Access to static files */
app.use(express.static(path.join(__dirname + '/public')));




/* Routes */
app.use('/', require('./routes/users.js'));

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});