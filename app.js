/*
 * Module dependencies 
 */
var express = require('express'); 
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var app = module.exports = express();
var index = require('./routes/index');
var video = require('./routes/videoupload');

app.use(express.static(__dirname + '/views'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static(__dirname + '/public'));

//render the index page, single page application with partials that
//we will inject into the index page whenever the view needs to change
//using Angular Routing to do this on the client side 
app.get('/', index.index);

//video API
app.use('/video', video);

app.listen(PORT, function(){
    console.log('listening on port ' + PORT);
});