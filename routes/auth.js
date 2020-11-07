const router = require("express").Router();
const authView = require('../controller/auth')


// auth/register
router.route('/register')
    .post(authView.createUser);


// auth/login
router.route('/login')
    .post(authView.loginUser);

module.exports = router;