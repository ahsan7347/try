const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateofbirth: {
        type: Date,
        default: Date.now
    },
    facebookurl: {
        type: String,
        required: true
    }
});

module.exports = Student =
    mongoose.model('student', StudentSchema);