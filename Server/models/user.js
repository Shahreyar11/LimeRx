const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({  // as mongoose.Schema is a class so we write new as its not a function
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    } ,
    password: {
        type: String,
        required: true
    }
},  {
    timestamps: true
});

const USER = mongoose.model('user', userSchema);

module.exports = USER  // So we export without object and exported variable to be accessed directly