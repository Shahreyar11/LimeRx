const mongoose = require('mongoose')

const DetailSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    conten:{
        type: String,
    }
}, { 
    timestamps: true

});

const Details = mongoose.model('data', DetailSchema);

module.exports(Details);