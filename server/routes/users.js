var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  /*res.send('respond with a resource');*/
  res.render('votantes', { title: 'Sistema de votación' });
});



router.post('/validar', function(req, res, next) {
  /*res.send('validando');*/
  res.render('candidatos', { title: 'Sistema de votación' });
});


module.exports = router;
