const { User } = require("../models/user");
const { validateRequest } = require("../helpers/helper_validation");
const { userValidationSchema } = require("../models/user");


const createUser = async (req, res) => {
    const user = User(req.body);
    const  error  = validateRequest(req.body, userValidationSchema);
    console.log(error);
    res.send(error);
    // user.save().then(result => {
    //     res.send(result);
    // }).catch(error => {
    //     res.send(error);
    // })
}

module.exports = { createUser };