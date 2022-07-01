const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    profileName: {
        type: 'string',
        required: true,
        unique: true
    },
    dayBirth: {
        type: 'string',
        required: true
    },
    monthBirth: {
        type: 'string',
        required: true
    },
    yearBirth: {
        type: 'string',
        required: true
    },
    gender: {
        type: 'string',
        required: true
    },
    terms: {
        type: 'string',
    }
});


module.exports = mongoose.model('users', userSchema);