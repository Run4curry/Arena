/*
 * Module dependencies 
 */
var express = require('express'); 
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var app = module.exports = express();
var index = require('./routes/index');

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));
app.get('/', index.index);

app.listen(PORT, function(){
    console.log('listening on port ' + PORT);
});