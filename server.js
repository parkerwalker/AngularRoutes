var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'));

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html'))
});//end base url

app.listen(3000, function(){
  console.log('server up on 3000');
});//end listen
