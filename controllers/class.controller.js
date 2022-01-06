const express = require('express');
const router = express.Router();
const Student = require('../models/Student.model');
const Classmodel = require('../models/Class.model');
const Note = require('../models/Student.model');
const {body,validationResult} = require('express-validator');

module.exports.classview = (req,res)=>{
    Classmodel.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Students."
        });
    });
    }
    

module.exports.classadd = (req,res)=>{
  Classmodel.findOne({subject:req.body.subject}).then(user=>{
    if(user){
        return res.status(400).json({subject:'Subject already exist'});
    }
    else{
        const newu = new Classmodel({
            subject: req.body.subject,
            teachername: req.body.teachername,
            duration:req.body.duration,
            time:req.body.time
        });
                newu.save().then(user=>res.json(user)).catch(err=>console.log(err));
    }
});
    }

//Update Student
//Put
module.exports.classup = (req,res)=>{
    
  // Find note and update it with the request body
  Classmodel.findByIdAndUpdate(req.params.noteId, {
      subject: req.body.subject || "Untitled Note",
      teachername: req.body.teachername,
      duration : req.body.duration,
      time: req.body.time
  }, {new: true})
  .then(note => {
      if(!note) {
          return res.status(404).send({
              message: "Note not found with id " + req.params.noteId
          });
      }
      res.send(note);
  }).catch(err => {
      if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Note not found with id " + req.params.noteId
          });                
      }
      return res.status(500).send({
          message: "Error updating note with id " + req.params.noteId
      });
  });
};    

    module.exports.classdel = (req,res)=>{
      Classmodel.findByIdAndRemove(req.params.noteId)
      .then(note => {
          if(!note) {
              return res.status(404).send({
                  message: "Note not found with id " + req.params.noteId
              });
          }
          res.send({message: "Class deleted successfully!"});
      }).catch(err => {
          if(err.kind === 'ObjectId' || err.name === 'NotFound') {
              return res.status(404).send({
                  message: "Class not found with id " + req.params.noteId
              });                
          }
          return res.status(500).send({
              message: "Class not delete note with id " + req.params.noteId
          });
      });
  }
