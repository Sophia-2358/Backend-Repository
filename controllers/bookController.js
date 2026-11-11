
import * as bookService from '../services/bookService.js';

// Retrieve all books
export const fetchAllBooks = async (req, res) => {
    try {
        const books = await bookService.fetchAllBooks();
        res.status(200).json(books);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message || 'Internal Server Error'
        });
    }
};

// Insert book
export const createBook = async (req, res) => {
    const { title, author } = req.body;
    const book = { title, author };

    try {
        const bookId = await bookService.createBook(book);

        res.status(201).json({
            success: true,
            message: bookId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message || 'Internal Server Error'
        });
    }
};

// Update book
export const editBook = async (req, res) => {
    const { title, author } = req.body;
    const id = parseInt(req.params.id);

    const book = { id, title, author };

    try {
        const updatedBook = await bookService.updateBook(book);

        res.status(200).json({
            success: true,
            message: updatedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message || 'Internal Server Error'
        });
    }
};

// Delete book
export const deleteBook = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const deletedBook = await bookService.deleteBook(id);

        res.status(200).json({
            success: true,
            message: deletedBook
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message || 'Internal Server Error'
        });
    }
};