//import express obj
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create the object that represents the document in the practice collection
let practice = require('../models/schema');

/* GET practice page. */
router.get('/', (req, res, next) => {
  //equilvalent to db.find
  practice.find((err, practice) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('practices/index', {
        title: 'Practice',
        //passing collection from server that will pass into the view
        practice:practice
      });
    }
  })
});

/* GET Edit page. */
router.get('/:id', (req, res, next) => {
  //reference to id
  let id = req.params.id;
  
  //find game by id
  practice.findById(id, (err, practice) => {
    if (err) {
        console.error(err);
        res.end(error);
    }
    else {
        //show the edit view page
      res.render('practices/details', {
        title: 'Practice Details',
        //passing collection from server that will pass into the view
        practice:practice
      });
    }
  })
});

module.exports = router;