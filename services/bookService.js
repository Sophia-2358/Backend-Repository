
import * as bookModel from '../models/bookModel.js';

// Retrieve all books
export const fetchAllBooks = async () => {
    const books = await bookModel.fetch();
    return books;
};

// Check if a book exists
const doesBookExist = async (book) => {
    let existing;

    if (Object.hasOwn(book, "id")) {
        existing = await bookModel.findBookById(book.id);
    } else {
        existing = await bookModel.findBookByTitleAndAuthor(
            book.title,
            book.author
        );
    }

    return existing.length > 0;
};

// Insert book
export const createBook = async (book) => {
    if (!book.title || !book.author) {
        throw new Error('Title and Author are required!');
    }

    const existing = await doesBookExist(book);

    if (existing) {
        throw new Error('Book already exists!');
    }

    const bookId = await bookModel.insert(book);
    return bookId;
};

// Update book
export const updateBook = async (book) => {
    if (!book.title || !book.author) {
        throw new Error('Title and Author are required!');
    }

    const existing = await doesBookExist({ id: book.id });

    if (!existing) {
        throw new Error('Book does not exist!');
    }

    const updatedBook = await bookModel.update(book);
    return updatedBook;
};

// Delete book
export const deleteBook = async (id) => {
    const existing = await doesBookExist({ id });

    if (!existing) {
        throw new Error('Book does not exist!');
    }

    const deletedBook = await bookModel.remove(id);
    return deletedBook;
};