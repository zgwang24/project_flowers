var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
  // res.render('main', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Express' });
});
router.get('/forgetPass', function(req, res, next) {
  res.render('forgetPass', { title: 'Express' });
});
router.get('/success', function(req, res, next) {
  res.render('success', { title: 'Express' });
});
router.get('/receive', function(req, res, next) {
  res.render('receive', { title: 'Express' });
});
router.get('/reMain', function(req, res, next) {
  res.render('reMain', { title: 'Express' });
});

module.exports = router;
