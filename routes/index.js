let express = require('express');
let router = express.Router();

// Global Route Variables
let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Express',
    date: currentDate
   });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', {
    title: 'About'
   });
});

module.exports = router;
