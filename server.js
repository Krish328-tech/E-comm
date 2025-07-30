var express = require('express');
var app = express();
var port = 8081;
app.use(express.static('frontend'));
app.listen(port , function(){
    console.log('Server is Runiing on port ' + port);
});