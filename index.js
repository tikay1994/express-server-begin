var express = require('express')
var app = express()
 
app.get('/', function (request, respone) {
  respone.send('Hello World')
})
 
app.listen(3000, function(){
	console.log('Hey men, server listening on port 3000')
})