const mongoose = require('mongoose');
const footerSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    },
    img: {
        type: String
    },
}, { timestamps: true });


module.exports = mongoose.model('Footer', footerSchema);