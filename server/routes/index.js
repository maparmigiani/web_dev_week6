/*
*Name: Maiara Almeida
*Student id: 301145511
*/

var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',displayName: req.user ? req.user.displayName : ""  });
});

router.get('/home', function(req, res, next) {
  res.render('home.ejs', { title: 'Home',displayName: req.user ? req.user.displayName : ""  });
});
router.get('/services', function(req, res, next) {
  res.render('services.ejs', { title: 'Service',displayName: req.user ? req.user.displayName : ""  });
});

router.get('/about', function(req, res, next) {
  res.render('about.ejs', { title: 'About',displayName: req.user ? req.user.displayName : ""  });
});

router.get('/projects', function(req, res, next) {
  res.render('projects.ejs', { title: 'Projects',displayName: req.user ? req.user.displayName : ""  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact.ejs', { title: 'Contact',displayName: req.user ? req.user.displayName : ""  });
});

//Get Route for displaying the login page
router.get('/login', indexController.displayLoginPage);

//Post Route for process the login page
router.post('/login', indexController.processLoginPage);

//Get Route for displaying the registration page
router.get('/register', indexController.displayRegisterPage);

//Post Route for process the registration page
router.post('/register', indexController.processRegisterPage);

//GET Route to logout
router.get('/logout', indexController.performLogout);

module.exports = router;
