const express = require("express"),
      postView = require("../controller/posts"),
      router = express.Router(),
      { verifyToken } = require('../helpers/helper_verification');

// Routers

// posts/
router.route('/')
    .get(postView.getPosts)
    .post(verifyToken, postView.createPost);

// posts/postId
router.route('/:postId')
    .get(postView.getPostById)
    .delete(verifyToken, postView.deletePostById);

// adding nested router of comment
router.use('/:postId/comments', require('./comments'));

module.exports = router;