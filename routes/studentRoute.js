
import * as studentController from '../controllers/studentController.js';
import express from 'express';

const studentRoute = express.Router();

// Retrieve all students
studentRoute.get('/', studentController.fetchAllStudents);

// Create student
studentRoute.post('/', studentController.createStudent);

// Update student
studentRoute.put('/:id', studentController.editStudent);

// Delete student
studentRoute.delete('/:id', studentController.deleteStudent);

export default studentRoute;