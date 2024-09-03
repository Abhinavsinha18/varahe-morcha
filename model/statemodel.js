const mongoose = require('mongoose');

let schema = mongoose.Schema({
    state: {
        type :String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
})


const Statemodel =  mongoose.model('state',schema);

module.exports = Statemodel;