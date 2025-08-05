const { uniq } = require('lodash');
const mongoose  = require('mongoose');

const fileSchema = new mongoose.Schema({
    userName: {
      type: String,
      required: true,
    },
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
    expiryAt: {
      type: Date,
      required: true,
    },
    isExpired: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type:String
    }
},
{
    timestamps: true, // creates and manages createdAt & updatedAt automatically
}
);

module.exports = mongoose.models.File || mongoose.model('File', fileSchema);