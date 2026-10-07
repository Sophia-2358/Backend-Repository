import express from 'express';
import * as bookControllers from '../controllers/bookController.js';

const router = express.Router();

router.get('/', bookControllers.getBooks);

export default router;
