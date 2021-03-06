var express = require('express');
var router = express.Router();
var users = require('../database/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.get({}, (err, users) => {
    if (err) {
      res.status(404);
      return res.json({'msg': "Users not found"})
    }
    res.json({users: users});
  })
});

/* GET one user by id in url. */
router.get('/:user_id', function(req, res, next) {
  users.get({ '_id': req.params.user_id }, (err, users) => {
    if (err || !users || !users.length) {
      res.status(404);
      return res.json({'msg': "Users not found"})
    }
    res.json({user: users[0]});
  })
});

/* CREATE user */
router.post('/', function(req, res, next) {
  users.insert(req.body, (err, inserted_user) => {
    if (err) {
      res.status(422);
      return res.json({ 'err': err })
    }
    res.json({user: inserted_user});
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

router.put('/:user_id', function(req, res, next) {
  req.body['id'] = req.params.user_id;
  users.update(req.body, (err, result) => {
    if (err) {
      res.status(422);
      return res.json({ 'err': err })
    }

    if (!result.nModified) {
      res.status(404);
      return res.json({ 'msg': "User was not found" });
    }
    users.get({ '_id': req.params.user_id }, (err, users) => {
      res.json({user: users[0]});
    })
  })
});



module.exports = router;
