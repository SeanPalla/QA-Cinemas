const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('../passport/setup');
const AuthUtils = require('../util/authUtils');

function isJsonData(req, res, next) {
    if (req.headers['content-type'] !== 'application/json') {
        return next(new Error("Route only accepts JSON data."));
    }
    next();
};

exports.loginRequest = (request, response) => {
    response.status(200).send(request.user._id);
};

exports.register = async (request, response, next) => {
    try {
        // register the user
        const user = await User.register(new User({
            fullName: request.body.fullName,
            dateOfBirth: request.body.dateOfBirth,
            email: request.body.email,
            username: request.body.username,
            password: request.body.password,
            phoneNumber: request.body.phoneNumber,
            role: request.body.role,
            address: request.body.address
        }), request.body.password); 
        
        // if we have a user object send 200 bc was successful
        if (user) {
            passport.authenticate("local", {session: false});
            return response.status(200).send();
        }
    // if unsuccessful throw error
    } catch (error) {
        console.error(error);
        return next(error);
    }
    response.status(400).send('An issue occured while registering the user');
};

exports.logout = (request, response) => {
    request.logout((error) => {
        if (error) return next(error);
        response.cookie('connect.sid', "", {
            httpOnly: true,
            path: '/',
            domain: 'localhost',
            expires: new Date(1)
        });
        response.redirect('/login');
    });
};

// to be used when front end is implemented -- gives permitted access to discussion boards/admin dashboard
exports.isLoggedIn = (request, response, next) => {
    if (request.isAuthenticated()) return next();
    return response.status(400).send('Not logged in');
}