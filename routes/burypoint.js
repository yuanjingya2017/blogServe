var express = require('express');
var router = express.Router();
var burypoint = require('../controllers/burypoint');

/* GET users listing. */
router.post('/buryPoint', function(req, res, next) {
  console.log(req.method)
  burypoint.buryPoint(req, res)
})

module.exports = router;
