'use strict';

const moongose = require('mongoose');
const Schema = moongose.Schema;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [{
        type: String,
        required: true ,
        enum: ['user', 'admin'],
        default: 'user'
    }]
});

module.exports = moongose.model('Customer', schema);