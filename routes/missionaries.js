var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Mission-Connect');
var Schema = mongoose.Schema;

var userDataSchema = new Schema ({
    title: String,
    content: String,
    author: String
});

var UserData = mongoose.model('UserData', userDataSchema)



router.get('/get-data', function(req, res, next) {
    UserData.find()
    .then(function(doc) {
        res.render('index', {items : doc});
    });
});

router.get('/signup', function(req, res, next) {
    res.render('Msignup');
});

router.post('/signup', function(req, res, next) {
    models.missionaries.findOrCreate({
        where: {
            Username: req.body.username
        },
        defaults: {
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Email: req.body.email,
            Password: req.body.password
        }
    })
    .spread(function(result, created) {
        if ( created ) {
            res.send( "User successfully created" );
        } else {
            res.send('This user already exists');
        }
    });
});

router.get('/login', function(req, res, next) {
    res.render('login');
});

router.post('/login', function(req, res, next) {
    models.missionaries
    .findOne({
        where: {
            Username: req.body.username,
            Password: req.body.password
        }
    })
    .then(missionary => {
        if (user) {
            res.send('Login succeeded');
        } else {
            res.send('Invalid login!');
        }
    });
});





module.exports = router;
