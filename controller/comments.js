const { responseBody } = require("../helpers/helper_response");
const { Comment } = require("../models/comment"),
      Post = require("../models/post");


const addCommentByPostId = (req, res) => {
    // ADD NEW COMMENTS

    // find and add the post where the comments will be added
    Post.findOne({ _id:req.params.postId }).then(post => {
        const comment = Comment(req.body);
        post.comments.unshift(comment);
        return post.save();
    }).then(post => {
        return responseBody(res, 200, "Success", post);
    }).catch(error => {
        return responseBody(res, 500, "Failed", error.message);
    })
}

module.exports = { addCommentByPostId };