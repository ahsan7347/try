const express = require('express');
const app = express();
const routes = require('./api/routes');
const rout = require('./api/rout')
const mongoose = require("mongoose");
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())
app.use('/student',routes);
app.use('/class',rout)

mongoose.connect('mongodb://localhost/try');
mongoose.connection.once('open',function(){
    console.log("Mongodb Connected");
}); 

app.listen(5000,()=>{
    console.log("Litening on port 5000");
})