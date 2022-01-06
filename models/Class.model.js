const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema
const ClassSchema = new Schema({
  
  student: [{
    type: Schema.Types.ObjectId,
    ref: 'student',
    default: null
  }],

  subject: {
    type: String,
    required: true
  },
  teachername: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
});
module.exports = Classmodel =
  mongoose.model('class', ClassSchema);
