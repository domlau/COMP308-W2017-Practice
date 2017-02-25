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

/* GET about page. */
router.get('/about', (req, res, next) => {
  //equilvalent to db.find
  practice.find((err, practice) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('content/about', {
        title: 'About',
        //passing collection from server that will pass into the view
        practice:practice
      });
    }
  })

});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
  });
});

/* GET Service page. */
router.get('/service', (req, res, next) => {
  res.render('content/service', {
    title: 'Service'
  });
});

module.exports = router;
