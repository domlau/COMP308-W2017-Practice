//import express obj
let express = require('express');
let router = express.Router();
//import mongoose npm package
let mongoose = require('mongoose');

//create the object that represents the document in the practice collection
let practice = require('../models/schema');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
  });
});


/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
  });
});


module.exports = router;
