const mongoose = require('mongoose');
const { commentSchema } = require("./comment");

const postSchema = mongoose.Schema({
    title: String,
    author: String,
    body: String,
    comments: [commentSchema],
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('posts', postSchema);