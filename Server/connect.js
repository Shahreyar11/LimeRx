require('dotenv').config();  // this imports dotenv and .config helps us to use data saved in .env files
const mongoose = require('mongoose');

// A  asynchronous function to connect mongo DB so we don't have to write it multiple times 
async function connectToDB(url){
    return  mongoose.connect(url);
}

// In this type of exports we can use the destructring
module.exports = {
    connectToDB
};