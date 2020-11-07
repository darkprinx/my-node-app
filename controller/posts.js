const { responseBody } = require("../helpers/helper_response");
const Post = require("../models/post");


// all the view functions


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        return responseBody(res, 200, "Success", posts);
    } catch (error){
        return responseBody(res, 404, "Posts not found", error.message)
    }
}

const createPost = async (req, res) => {
    try {
        const post = await Post(req.body).save();
        return responseBody(res, 200, "Success", post);
    } catch (error) {
        return responseBody(res, 500, "Failed", error.message);
    }
}


const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        return responseBody(res, 200, "Success", post);
    } catch (error){
        return responseBody(res, 404, error.message);
    }
}

const deletePostById = async (req, res) => {
    try {
        const post = await Post.deleteOne({_id: req.params.postId });
        return responseBody(res, 200, "Success", post);
    } catch (error){
        return responseBody(res, 500, "Failed", error.message);
    }
}


module.exports = { getPosts, getPostById, createPost, deletePostById };