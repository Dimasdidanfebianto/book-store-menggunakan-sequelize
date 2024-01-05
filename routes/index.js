const { findAllBooks } = require('../app/controller/booksController');

const router = require('express').Router();

router.get('/books', (req, res) => {
    res.json({message: "Hello World! wkwkwkwk"})
})


router.get('/books', findAllBooks)
module.exports = router