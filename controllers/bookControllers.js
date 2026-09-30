import * as bookService from '../services/bookServices.js';

export const getBooks = async (req, res) => {
    const books = await bookService.getAllBooks();
    res.status(200).json(books);
}