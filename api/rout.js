const express = require('express');
const router = express.Router();
const s = require('../controllers/class.controller');
const {body,validationResult} = require('express-validator');

//route for view all students
router.route('/').get(s.classview);
//route for add a new student
router.route('/add').post(s.classadd);

// router.route('/add',[body('name').trim().isLength(3).withMessage('Name Must'),
// body('name').trim().isEmail().withMessage('Email Must')
// .normalizeEmail().toLowerCase(),
// ]).post(a.studentad);
//route to put a student
router.route('/:noteId').put(s.classup);
//route to delete a student
router.route('/:noteId').delete(s.classdel);

module.exports = router;