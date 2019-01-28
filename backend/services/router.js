const passport = require('passport')

const AuthController = require('../controllers/auth-controller')
const passportService = require('./passport')

var requireAuth = passport.authenticate(('jwt'), {session: false})
var requireLogin = passport.authenticate(('local'), {session: false})
var router = require('express').Router()

function protected(req, res, next){
    res.send("Here's the secret!\n")
}

router.route('/protected')
.get(requireAuth, protected)

router.route('/signup')
.post(AuthController.signup) 

router.route('/signin')
.post(requireLogin, AuthController.signin)

module.exports = router