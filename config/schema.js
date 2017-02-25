//to install npm package
//npm install mongoose --save

let mongoose = require('mongoose'); //import the mongoose npm package

//creating the model class
let practiceSchema = mongoose.Schema({
    name: String,
    email: String,
    cost: Number
},
    {
        collection: "practice"
    });

module.exports = mongoose.model('practice', practiceSchema);