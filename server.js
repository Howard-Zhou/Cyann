var express = require("express");
var bodyParser = require("body-parser");                // Pull information from HTML POST (express4)
var path = require("path");
// var multer  = require('multer')                      // Use multer for file uploads
var expressJWT = require('express-jwt');
var helmet = require('helmet')
var cors = require('cors');
console.log(__dirname)
//----------------------------------------
// DATABASE
//----------------------------------------
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//----------------------------------------
// BEGIN ROUTING
//----------------------------------------
var app = express();
app.use(cors());
app.use(express.static(__dirname));
app.use(helmet());

// var morgan = require('morgan');                      // Log requests to the console (express4)
// app.use(morgan('dev'));                              // Log every request to the console{}

app.use(bodyParser.json());                             // Parse application/json
app.use(bodyParser.urlencoded({"extended" : false}));   // DON'T parse application/x-www-form-urlencoded
app.use(expressJWT({ secret: 'CPEN321_CYANN' }).unless({ path: ['/api/users/register'] })); //jwt verification middleware.
// app.use(multer({ dest: './uploads/'}))               // Store file in /uploads directory

require('./routes')(app)

//----------------------------------------
// ERROR HANDLING
//----------------------------------------
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({ message: err.message, error: err });
});

//----------------------------------------
// START SERVER @ PORT 8080
//----------------------------------------
app.listen(8080);
console.log("Listening to PORT 8080");

module.exports.app = app;
