var express = require('express');
var router = express.Router();
var comment = require('../controllers/comment');

/* GET users listing. */
router.post('/sendComment', function(req, res, next) {
  console.log(req.method)
  comment.sendComment(req, res)
});

module.exports = router;
