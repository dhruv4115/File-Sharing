const { uniq } = require('lodash');
const mongoose  = require('mongoose');

const fileSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    cloudinaryUrl: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    size:{
        type: Number,
        required: true
    },
    expiry: {
        type: Date,
    },
    isExpired: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
});

module.exports = mongoose.model('File', fileSchema);