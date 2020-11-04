const mongoose = require("mongoose");

// commentSchema can be used as a child type in other objects
const commentSchema = mongoose.Schema({
    body: String, date: Date, user: String
})

// Comment object is connected to mongo db api for db operations
const Comment = mongoose.model('comment', commentSchema);
module.exports = { commentSchema, Comment};