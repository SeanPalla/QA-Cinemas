const passport = require('passport');
const router = new require('express').Router();
const User = require('../models/user');
const authController = require('../controllers/authController');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(User.authenticate()));

router.post('/api/login', passport.authenticate('local', {
    failureMessage: ' login credentials.',
    failureRedirect: 'http://localhost:3000'     // redirect to necessary point
}), authController.loginRequest);

//router.post('/register', authController.register);
router.post('/api/logout', authController.logout);

module.exports = router;
