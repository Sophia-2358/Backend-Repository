import * as studentcontroller from '../controllers/studentController.js';
import express from 'express';

const studentRoute = express.Router();

studentRoute.get('/', studentcontroller.fetchAllStudents);
studentRoute.post('/', studentcontroller.createStudent);
export default studentRoute; 
