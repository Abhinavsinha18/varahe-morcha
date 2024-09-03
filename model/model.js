const mongoose = require('mongoose');

let schema = mongoose.Schema({
    state: {
        type :String,
        required: true
    },
    Constituency:{
        type: String,
        required : true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
})


const model =  mongoose.model('constituency',schema);

module.exports = model;