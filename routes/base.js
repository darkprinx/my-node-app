const { response200 } = require("../helpers/helper_response");

const express = require("express"),
      router = express.Router();


router.route('/')
    .get((req, res) => {
        res.json(response200());
    })


// all the primary routes will be added from here
router.use('/auth', require('./auth'));
router.use('/posts', require('./posts'));

module.exports = router;