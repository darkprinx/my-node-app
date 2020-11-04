const express = require("express"),
      commentView = require("../controller/comments"),
      router = express.Router({mergeParams: true});


// Routers

router.route('/')
    .post(commentView.addCommentByPostId);

module.exports = router;