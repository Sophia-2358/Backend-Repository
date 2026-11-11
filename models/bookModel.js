
import pool from '../config/db.js';

// Retrieve all books
export const fetch = async () => {
    const [rows] = await pool.query("SELECT * FROM book");
    return rows;
};

// Find book by title and author
export const findBookByTitleAndAuthor = async (title, author) => {
    const [rows] = await pool.query(
        "SELECT * FROM book WHERE title = ? AND author = ?",
        [title, author]
    );
    return rows;
};

// Find book by ID
export const findBookById = async (id) => {
    const [rows] = await pool.query(
        "SELECT * FROM book WHERE id = ?",
        [id]
    );
    return rows;
};

// Insert book
export const insert = async (book) => {
    const [result] = await pool.query(
        "INSERT INTO book (title, author) VALUES (?, ?)",
        [book.title, book.author]
    );

    return result.insertId;
};

// Update book
export const update = async (book) => {
    const [result] = await pool.query(
        "UPDATE book SET title = ?, author = ? WHERE id = ?",
        [book.title, book.author, book.id]
    );

    return result.affectedRows;
};

// Delete book
export const remove = async (id) => {
    const [result] = await pool.query(
        "DELETE FROM book WHERE id = ?",
        [id]
    );

    return result.affectedRows;
};
