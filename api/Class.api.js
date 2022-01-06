const express = require('express');
const router = express.Router();
const ClassContoller = require('../controllers/class.controller');
const { body, validationResult } = require('express-validator');

//route for view all students
router.route('/').get(ClassContoller.classview);
//route for add a new student
router.route('/add').post(ClassContoller.classadd);

router.route('/add_student_to_class').post(ClassContoller.addStudentToClass);

// router.route('/add',[body('name').trim().isLength(3).withMessage('Name Must'),
// body('name').trim().isEmail().withMessage('Email Must')
// .normalizeEmail().toLowerCase(),
// ]).post(a.studentad);
//route to put a student
router.route('/:noteId').put(ClassContoller.classup);
//route to delete a student
router.route('/:noteId').delete(ClassContoller.classdel);

module.exports = router;