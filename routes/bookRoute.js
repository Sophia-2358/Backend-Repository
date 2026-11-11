
import * as bookController from '../controllers/bookController.js';
import express from 'express';

const bookRoute = express.Router();

// Retrieve all books
bookRoute.get('/', bookController.fetchAllBooks);
bookRoute.get('/all', bookController.fetchAllBooks);

// Create a book
bookRoute.post('/', bookController.createBook);

// Update a book
bookRoute.put('/:id', bookController.editBook);

// Delete a book
bookRoute.delete('/:id', bookController.deleteBook);

export default bookRoute;