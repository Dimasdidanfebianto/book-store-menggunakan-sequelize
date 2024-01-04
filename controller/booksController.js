const { Book } = require('../models');

const findAllBooks = async (req, res) => {
    try {
        const data = await Book.findAll();

        const result = {
            status: 'success',
            data
        };
        res.json(result)
        
    } catch (error) {
        res.json(error)
    }
}


module.exports = {
    findAllBooks
}