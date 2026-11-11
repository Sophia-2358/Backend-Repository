
import * as studentService from '../services/studentService.js';

// Retrieve all students
export const fetchAllStudents = async (req, res) => {
    try {
        const students = await studentService.fetchAllStudents();
        res.status(200).json(students);
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message || 'Internal Server Error'
        });
    }
};

// Create student
export const createStudent = async (req, res) => {
    const { name, srcode, program } = req.body;
    const student = { name, srcode, program };

    try {
        const studentId = await studentService.createStudent(student);

        res.status(201).json({
            success: true,
            message: studentId
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message || 'Internal Server Error'
        });
    }
};

// Update student
export const editStudent = async (req, res) => {
    const { name, srcode, program } = req.body;
    const id = parseInt(req.params.id);

    const student = { id, name, srcode, program };

    try {
        const updatedStudent = await studentService.editStudent(student);

        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message || 'Internal Server Error'
        });
    }
};

// Delete student
export const deleteStudent = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const deletedStudent = await studentService.deleteStudent(id);

        res.status(200).json({
            success: true,
            message: deletedStudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e.message || 'Internal Server Error'
        });
    }
};