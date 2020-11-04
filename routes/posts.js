const express = require("express"),
      postView = require("../controller/posts"),
      router = express.Router();


// Routers
router.route('/')
    .get(postView.getPosts)
    .post(postView.createPost);


router.route('/:postId')
    .get(postView.getPostById)
    .delete(postView.deletePostById);

// adding nested router of comment
router.use('/:postId/comments', require('./comments'));

module.exports = router;