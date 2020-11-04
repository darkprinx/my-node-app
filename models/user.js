const mongoose = require("mongoose");
const Joi = require("@hapi/joi");



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


const userValidationSchema = Joi.object({
    name: Joi.string().min(4).required(),
    email: Joi.string().min(6).max(30).required().email(),
    password: Joi.string().min(6).max(30).required()
});

const User = mongoose.model('user', userSchema);
module.exports = { userSchema, userValidationSchema, User};


