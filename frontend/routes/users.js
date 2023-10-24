var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('../../backend1/routes/users', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
