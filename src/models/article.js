const mongoose = require('mongoose');

let article = mongoose.Schema({
    title: String,
    content: String,
    createdAt: Date
}, {
    versionKey: false
});

module.exports = mongoose.model('Article', article);