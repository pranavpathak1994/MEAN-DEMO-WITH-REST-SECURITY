require('rootpath')();
var express = require('express');
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
/*var cookieParser = require('cookie-parser');*/
var expressJwt = require('express-jwt');
var config = require('config.json');

var mongoose = require('mongoose');

mongoose.connect(config.connectionString);

require('./models/User');
require('./models/Contact'); 

/*app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');*/

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
/*app.set('views', __dirname + '/views');*/
express.static(__dirname + '/views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));

// use JWT auth to secure the api
app.use('/api', expressJwt({ secret: config.secret }).unless({ path: ['/api/users/authenticate', '/api/users/register'] }));

// routes
/*app.use('/login', require('./controllers/login.controller'));
app.use('/register', require('./controllers/register.controller'));
app.use('/app', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'));
*/
app.use('/register', require('./controllers/register.controller'));
app.use('/login', require('./controllers/login.controller'));
app.use('/meanDemo', require('./controllers/app.controller'));
app.use('/api/users', require('./controllers/api/users.controller'));
app.use('/static',express.static(__dirname + '/app'));

// make '/app' default route
app.get('/', function (req, res) {
    return res.render('index');
});



// start server
var server = app.listen(3000, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});