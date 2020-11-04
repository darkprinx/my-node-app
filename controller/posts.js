const { response200, response404 } = require("../helpers/helper_response");
const Post = require("../models/post");


// all the view functions


const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(response200(posts));
    } catch (error){
        res.json(response404(error));
    }
}

const createPost = async (req, res) => {
    try {
        const post = await Post(req.body).save();
        res.json(response200(post));
    } catch (error) {
        res.json(response404(error));
    }
}


const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(response200(post));
    } catch (error){
        res.json(response404(error));
    }
}

const deletePostById = async (req, res) => {
    try {
        const post = await Post.deleteOne({_id: req.params.postId });
        res.json(response200(post));
    } catch (error){
        res.json(response404(error));
    }
}


module.exports = { getPosts, getPostById, createPost, deletePostById };