var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var userRoute = require('./routes/user.route')

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
  res.render('index')
});

app.use('/users', userRoute);


app.listen(3000, function(){
	console.log('Hey men, server listening on port 3000')
})