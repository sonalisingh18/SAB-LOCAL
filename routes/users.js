const router = require('express').Router();

// Index page
router.get('/' , (req , res) => res.render('index'));

// Login Page
router.get('/formlogin', (req, res) => res.render('formlogin'));

// Register Page
router.get('/formregister', (req, res) => res.render('formregister'));

// Donation Page
router.get('/formdonate', (req, res) => res.render('formdonate'));

// Add Shop Page
router.get('/formaddshop', (req, res) => res.render('formaddshop'));


module.exports = router;
