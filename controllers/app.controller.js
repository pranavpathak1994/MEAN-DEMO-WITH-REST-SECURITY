var express = require('express');
var router = express.Router();
 
// use session auth to secure the angular app files
router.use('/', function (req, res, next) {
    /*if (req.path !== '/login' && !req.session.token) {*/
    	
    /*if (req.path !== '/login'  && !req.session.token) {
        return res.redirect('/login?returnUrl=' + encodeURIComponent('/meanDemo' + req.path));
    }*/
 
    next();
});

/*router.use('/', express.static('app'));*/

module.exports = router;