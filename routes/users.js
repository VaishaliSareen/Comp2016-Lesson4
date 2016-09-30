var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

 // res.send('respond with a resource');

  //load users view instead
  var userList = ['Harsh','Mahesh', 'Vaishali'];
  res.render('users', {title: 'User List', users: userList});
});

module.exports = router;
