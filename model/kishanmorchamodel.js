const mongoose = require('mongoose');

let schema = mongoose.Schema({
    member_name: {
        type :String,
        required: true
    },
    member_contact_number: {
        type :Number,
        required: true
    },
    primary_member_id: {
        type :String,
        required: true
    },
    new_member_id: {
        type :String,
        required: true
    },
 
    loksabha_name: {
        type :String,
        required: true
    },
    primary_member_name: {
        type :String,
        required: true
    },
    primary_contact_number: {
        type :Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
})


const kishanmorchamodel =  mongoose.model('kishan-morcha',schema);

module.exports = kishanmorchamodel;