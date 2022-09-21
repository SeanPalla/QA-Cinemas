require('../models/db')
const passport = require('../passport/setup');
const UserNotFoundError = require('../error/UserNotFoundError');
const User = require('../models/user');


function isJsonData(req, res, next) {
    if (req.headers['content-type'] !== 'application/json') {
        return next(new Error("Route only accepts JSON data."));
    }
    next();
};

exports.allUsers = async (req, res) => {
    res.json(await User.find());
    console.log("running")
};

exports.userById =  async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.status(200).json(user);
    } else {
        next(new UserNotFoundError(req.params.id));
    }
};

exports.userByName =  async (req, res, next) => {
    const user = await User.find({'fullName':req.params.fullName});
    if (user) {
        res.status(200).json(user);
    } else {
        next(new UserNotFoundError({'fullName':req.params.fullName}));
    }
};

exports.createUser =  async (req, res, next) => {
    try {
        const user = new User(req.body);
        await user.save();
        if (user){
            res.status(201)
                    .setHeader("Content-Location", `/user/${user.id}`)
                    .json(user);
        }
    } catch (error) {
        next(error);
    }
};

exports.register = async (req, res, next) =>{
    try{
        const user = await User.register(new User(
                req.body
                ), req.body.password); // register(userWithUsername, password)
        if (user){
            passport.authenticate("local");
            await user.save();
            res.status(201)
                .setHeader("Content-Location", `/user/${user._id}`)
                .json(user);
        }
         }catch (error) {
         res.json({success: false, message: `${error}`});
    }
}

exports.updateUser =  async (req, res, next) => {
    const user = await User.updateOne({ _id: req.params.id }, req.body);
    if (user) {
        res.status(200)
            .json(user);
    } else {
        next(new UserNotFoundError(req.params.id));
    }
};

exports.deleteById = async (req, res, next) => {
    const user = await User.findOneAndDelete({ _id: req.params.id });
    if (user) {
        res.status(200).json(user);
    } else {
        next(new UserNotFoundError(req.params.id));
    }
};

