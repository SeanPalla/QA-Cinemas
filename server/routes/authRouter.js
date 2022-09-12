const passport = require('passport');
const router = new require('express').Router();
const User = require('../models/user');
const authController = require('../controllers/authController');

// router.get('/login', (request, response) => {
//     response.sendFile(global.__basedir + '==NEEDS FRONTEND FILE==');
// });

// router.get('/register', (request, response) => {
//     response.sendFile(global.__basedir + '==NEEDS FRONTEND FILE==');
// });

router.post('/login', passport.authenticate('local', {
    failureMessage: 'Invalid login credentials.',
    failureRedirect: '/login'
}), authController.loginRequest);

router.post('/register', authController.register);
router.post('/logout', authController.logout);

module.exports = router;
