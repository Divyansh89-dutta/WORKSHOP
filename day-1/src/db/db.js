const mongoose = require('mongoose');
const config = require('../config/config');

function connected () {
    mongoose.connect(config.MONGODB_URL)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));
}
module.exports = connected;
