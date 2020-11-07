const mongoose = require("mongoose");
const Joi = require("@hapi/joi");


// registerd users schema
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 4
    },
    email: {
        type: String,
        required: true,
        max: 30,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 30,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
})

// schema used for registration
const userValidationSchema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().min(6).max(30).required().email(),
    password: Joi.string().min(6).max(30).required()
});


const loginValidationSchema = Joi.object({
    email: Joi.string().min(6).max(30).required().email(),
    password: Joi.string().min(6).max(30).required()
})

const User = mongoose.model('user', userSchema);
module.exports = { userSchema, userValidationSchema, User, loginValidationSchema};


