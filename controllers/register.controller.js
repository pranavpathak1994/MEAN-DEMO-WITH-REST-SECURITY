var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('config.json');
 
/*router.get('/', function (req, res) {
    res.render('register');
});*/
 
router.post('/', function (req, res) {
    // register using api to maintain clean separation between layers

    request.post({
        url: config.apiUrl + '/users/register',
        form: req.body,
        json: true
    }, function (error, response, body) {
        if (error) {
            return res.send(error);
        }
 
        if (response.statusCode !== 200) {
            return res.send({
                error: response.body,
                name: req.body.name,
                emailId: req.body.emailId,
                username: req.body.username
            });
            
        }
 
        // return to login page with success message
        req.session.success = 'Registration successful';
        return res.sendStatus(200);
    });
});
 
module.exports = router;