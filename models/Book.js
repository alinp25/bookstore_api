const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    numberOfPages: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model('Book', BookSchema);