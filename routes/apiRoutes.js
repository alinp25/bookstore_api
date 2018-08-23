const express = require('express');
const router  = express.Router();

const Book = require('../models/Book');

router.get('/', (req, res) => {
    Book.find({})
        .then(books => res.send(books))
        .catch(err => ress.send({ error: err }));
});

router.post('/', (req, res) => {
    const newBook = Book({
        title: req.body.title,
        author: req.body.author,
        numberOfPages: req.body.numberOfPages
    });
    newBook.save()
        .then(book => res.send({ result: 'success', book }))
        .catch(err => res.send({ result: 'failed', err}));
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.send(book))
        .catch(err => {res.send({ error: err })});
})

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
        .then(book => res.send({ 
            result: 'success',
            book
        }))
        .catch(err => res.send({
            result: 'failed',
            err
        }))
})

module.exports = router;