var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('notes', { notes: ['note1', 'note2', 'note3'] });
});

module.exports = router;
