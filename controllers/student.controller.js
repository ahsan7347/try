const express = require('express');
const router = express.Router();
const Student = require('../models/Student.model');
const Note = require('../models/Student.model');
const { body, validationResult } = require('express-validator');


//add student
//post
module.exports.studentad = (req, res) => {
    Student.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: 'Email already exist' });
        }
        else {
            const newUser = new Student({
                name: req.body.name,
                email: req.body.email,
                dateofbirth: req.body.dateofbirth,
                facebookurl: req.body.facebookurl
            });
            newUser.save().then(user => res.json(user)).catch(err => console.log(err));
        }
    });
}

//View Student
//Get
module.exports.student = (req, res) => {
    Student.find()
        .then(notes => {
            res.send(notes);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving Students."
            });
        });
}

//Update Student
//Put
module.exports.studentup = (req, res) => {

    // Find note and update it with the request body
    Student.findByIdAndUpdate(req.params.noteId, {
        name: req.body.name || "Untitled Note",
        email: req.body.email,
        dateofbirth: req.body.dateofbirth,
        facebookurl: req.body.facebookurl
    }, { new: true })
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send(note);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Error updating note with id " + req.params.noteId
            });
        });
};



//Delete Student
//Delete
module.exports.studentdel = (req, res) => {
    Student.findByIdAndRemove(req.params.noteId)
        .then(note => {
            if (!note) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.noteId
                });
            }
            res.send({ message: "Student deleted successfully!" });
        }).catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Student not found with id " + req.params.noteId
                });
            }
            return res.status(500).send({
                message: "Could not delete note with id " + req.params.noteId
            });
        });
}