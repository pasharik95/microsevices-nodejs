var express = require('express');
var router = express.Router();
var models = require('../models/index');

/* GET books listing. */
router.get('/', function(req, res, next) {
  models.book.findAll({}).then((books) => {
    res.json(books);
  });
});

/* GET one book by id. */
router.get('/:book_id', function(req, res, next) {
  models.book.findById(req.params.book_id).then((book) => {
    if (!book) {
      res.status(404);
      return res.json({ 'msg': "Book was not found" })
    }
    res.json(book);
  });
});

/* POST create book */
router.post('/', function(req, res, next) {
  models.book.create({
    name: req.body.name,
    pages: req.body.pages,
    author: req.body.author
  }).then((book) => {
    res.json(book);
  });
});

/* DELETE book */
router.delete('/:book_id', function(req, res, next) {
  models.book.findById(req.params.book_id).then((book) => {
    if (!book) {
      res.status(404);
      return res.json({ 'msg': "Book was not found" })
    }
    book.destroy();
    res.json(book);
  });
});

/* PUT update book */
router.put('/:book_id', function(req, res, next) {
  models.book.findById(req.params.book_id).then((book) => {
    if (!book) {
      res.status(404);
      return res.json({ 'msg': "Book was not found" })
    }
    book.update(req.body).then((book) => {
      res.json(book);
    });
  });
});

module.exports = router;
