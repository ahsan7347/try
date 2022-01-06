const express = require('express');
const router = express.Router();
const a = require('../controllers/student.controller');
const {body,validationResult} = require('express-validator');

//route for view all students
router.route('/').get(a.student);
//route for add a new student
router.route('/add').post(a.studentad);
//route to put a student
router.route('/:noteId').put(a.studentup);
//route to delete a student
router.route('/:noteId').delete(a.studentdel);

module.exports = router;