const mongoose = require('mongoose');

const DataModal = mongoose.Schema({

    name: String,
    number: String,
    age: String,
    discription: String
})
module.exports = mongoose.model('user', DataModal);