import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
  const book = await bookModel.fetch();
  return book;
}

const doesBookExist = async (book) => {
  let existing;
  if(Object.hasOwn(book, "id")) {
    existing = await bookModel.findBookById(book.id);
  } else {
    existing = await bookModel.findBookByTitleAndAuthor(book.title, book.author);
  }

  if(existing.length > 0) {
    return true;
  }

  return false;
}

// insert
export const createBook = async (book) => {
  if(!book.title || !book.author) {
    throw new Error('Title and Author are required!');
  }
  const existing = await doesBookExist(book);
  
  if(existing) {
    throw new Error('Book already exists!');
  }

  const bookId = await bookModel.insert(book);
  return bookId;
}

// update
export const updateBook = async (book) => {
  if(!book.title || !book.author) {
    throw new Error('Title and Author are required!');
  }
  const existing = await doesBookExist(book);
  
  if(!existing) {
    throw new Error('Book does not exist!');
  }

    const updateBook = await bookModel.update(book);
    return updateBook;
}

// delete
export const deleteBook = async(id) =>{
  const book = {id};

  const existing = await doesBookExist(book);
  
  if(!existing) {
    throw new Error('Book does not exist!');
  }
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}