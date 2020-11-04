const router = require("express").Router();
const authView = require('../controller/auth')


router.route('/register')
    .post(authView.createUser);

module.exports = router;