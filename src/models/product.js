'use strict';

const moongose = require('mongoose');
const Schema = moongose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatorio'],
        trim: true,
        index: true,
        unique: true
    },
    description:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    },
    tags: [{
        type: String,
        required: true  
    }],
    image: {
        type: String,
        required: true,
        trim: true
    },
});

module.exports = moongose.model('Product', schema);