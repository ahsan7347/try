const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())

const ClassRoute = require('./api/Class.api');
const StudentRoute = require('./api/Student.api')

app.use('/student', StudentRoute);
app.use('/class', ClassRoute)

mongoose.connect('mongodb://localhost/try');
mongoose.connection.once('open', function () {
    console.log("Mongodb Connected");
});

app.listen(5000, () => {
    console.log("Litening on port 5000");
})