import * as bookModel from '../models/bookModel.js';

export const getAllBooks = async () => {
    const books = await bookModel.fetch();
    return books;
}