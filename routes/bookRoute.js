import * as bookcontroller from '../controllers/bookController.js';
import express from 'express';

const bookRoute = express.Router();

bookRoute.get('/all', bookcontroller.fetchAllBooks);
bookRoute.post('/', bookcontroller.createBook);

export default bookRoute;