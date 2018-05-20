var express = require('express');
var router = express.Router();
var users = require('../database/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.get({}, (err, users) => {
    res.json({users: users});
  })
});

/* CREATE user */
router.post('/', function(req, res, next) {
  users.insert(req.query, (err, result) => {
    res.json({result: result});
  })
});

/* DELETE user */
router.delete('/:user_id', function(req, res, next) {
  search_user = new Promise((resolve, reject) => {
    users.get({ '_id': req.params.user_id }, (err, users) => {
      if (err || !users || !users.length) {
        return reject(err)
      }
      resolve(users[0]);
    })
  });

  search_user.catch((err) => {
    res.status(404);
    res.json({ 'msg': "user was not found" })
  });

  search_user.then((user) => {
    users.delete(user._id, (err, result) => {
      if (err) {
        res.status(422);
        return res.json({ 'msg': "There is error during removing user. Error: " + err })
      }

      res.json({ 'user': user })
    })
  })
});



module.exports = router;
