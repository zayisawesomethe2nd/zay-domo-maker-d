const mongoose = require('mongoose');
const _ = require('underscore');

const setName = (name) => _.escape(name).trim();

const domoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        set: setName
    },
    age: {
        type: Number,
        min: 0,
        required: true,
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: 'Account',
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

domoSchema.statics.toAPI = (doc) => ({
    name: doc.name,
    age: doc.age,
});

const DomoModel = mongoose.model('Domo', domoSchema);
module.exports = DomoModel;