
var db = require('../db.js');
var shortid = require('shortid');

module.exports.index = function (req, res) {
  res.render('users/index', {
  	users: db.get('users').value()
  })
};

module.exports.search = function (req, res) {
  var q = req.query.q;
  var matchedUsers = db.get('users').filter(function(user){
  	return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  }).value();

  res.render('users/index', {
  	users: matchedUsers
  })
};

module.exports.create = function (req, res) {
  res.render('users/create');
};

module.exports.view = function (req, res) {
	var id = req.params.id;
	var user = db.get('users').find({id: id}).value();
	res.render('users/view', {
		user: user
	});
};

module.exports.postCreate = function (req, res) {
  req.body.id = shortid.generate();
  db.get('users').push(req.body).write();
  res.redirect('/users');
};

