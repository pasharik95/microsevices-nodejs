var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.book.findAll({}).then(function(books) {
    res.json(books);
  });
});

module.exports = router;
