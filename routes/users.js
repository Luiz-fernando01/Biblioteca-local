var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.render('index', { title: 'you are so cool' });
});

router.get('/cool/PC', function(req, res, next) {
  res.send('É os guri da TI' );
});

router.get('/ifc', function(req, res, next) {
  res.render('index', { title: 'bem vindo ao IFC' });
});


module.exports = router;
