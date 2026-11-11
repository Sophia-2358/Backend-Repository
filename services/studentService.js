
import * as studentModel from '../models/studentModel.js';

// Retrieve all students
export const fetchAllStudents = async () => {
    const students = await studentModel.fetch();
    return students;
};

// Create student
export const createStudent = async (student) => {
    const studentId = await studentModel.insert(student);
    return studentId;
};

// Update student
export const editStudent = async (student) => {
    const updatedStudent = await studentModel.update(student);
    return updatedStudent;
};

// Delete student
export const deleteStudent = async (id) => {
    const deletedStudent = await studentModel.remove(id);
    return deletedStudent;
};