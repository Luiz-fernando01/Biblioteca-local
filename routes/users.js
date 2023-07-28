var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'you are so cool' });
});

router.get('/cool/beach', function(req, res, next) {
  res.send('eu amo praia <3' );
});

router.get('/ifc', function(req, res, next) {
  res.render('index', { title: 'bem vindo ao IFC' });
});


module.exports = router;
