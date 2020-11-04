const { response200, response404 } = require("../helpers/helper_response");
const { Comment } = require("../models/comment"),
      Post = require("../models/post");


const addCommentByPostId = (req, res) => {
    Post.findOne({ _id:req.params.postId }).then(post => {
        const comment = Comment(req.body);
        post.comments.unshift(comment);
        return post.save();
    }).then(post => {
        res.json(response200(post));
    }).catch(error => {
        res.json(response404(error));
    })
}

module.exports = { addCommentByPostId };