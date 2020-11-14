var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/sendComment', function(req, res, next) {
  console.log(req.method)
  // res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.json({status: 200, message: '上传成功'})
  // res.end('ok');
});

module.exports = router;
