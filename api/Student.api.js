const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/student.controller');
const { body, validationResult } = require('express-validator');

//route for view all students
router.route('/').get(StudentController.student);
//route for add a new student
router.route('/add').post(StudentController.studentad);
//route to put a student
router.route('/:noteId').put(StudentController.studentup);
//route to delete a student
router.route('/:noteId').delete(StudentController.studentdel);

module.exports = router;