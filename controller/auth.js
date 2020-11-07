const { User } = require("../models/user");
const { validateRequest } = require("../helpers/helper_validation");
const { userValidationSchema, loginValidationSchema } = require("../models/user");
const { responseBody } = require("../helpers/helper_response")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const createUser = async (req, res) => {
    // CREATE A NEW USER AFTER REGISTRATION

    try {
        // validate data
        const  error  = validateRequest(req.body, userValidationSchema);
        if (error) return responseBody(res, 400, error);

        // check if the user already exist
        const emailExist = await User.findOne({ email: req.body.email });
        if (emailExist) return responseBody(res, 400, "User already exist");

        // hash password
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        
        // save data
        const user = User(req.body);
        user.save().then(result => {
            return responseBody(res, 200, "Success", user);
        }).catch(error => {
            return responseBody(res, 500, "Exeption occured", error.message);
        })
    } catch (error) {
        return responseBody(res, 500, "Exeption occured", error.message);
    }
}


const loginUser = async (req, res) => {
    // LOGIN USERS

    try {
        // validate data
        const error = validateRequest(req.body, loginValidationSchema);
        if (error) {
            return responseBody(res, 400, error);
        }

        // search user by email
        const user = await User.findOne({ email: req.body.email })
        if (!user){
            return responseBody(res, 404, "User doesn't exist");
        }

        // password validation
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isValidPassword) {
            return responseBody(res, 400, "Invalid user");
        }

        // generate token
        const userToken = jwt.sign({_id: user._id }, process.env.TOKEN_SECRET);
        return responseBody(res, 200, "Login success", {token: userToken});
    } catch (error) {
        return responseBody(res, 500, "Exeption occured", error.message);
    }
}

module.exports = { createUser, loginUser };