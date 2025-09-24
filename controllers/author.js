const Author = require('../models').Author;

class AuthorController {

    // Get all authors data
    getAllAuthors = async (req, res) => {
        try {
            const authors = await Author.findAll();
            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve authors' });
        }
    };

    // Get author by id
    getAuthorById = async (req, res) => {
        try {
            const author = await Author.findByPk(req.params.author_id, {
                include: 'Articles'
            } );
            if (author) {
                res.status(200).json(author);
            } else {
                res.status(404).json({ error: 'Author not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to retrieve author' });
        }
    }

}


module.exports = new AuthorController();