const mongoose = require('mongoose');



const standMonumentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    size: {
        type: String,
        // required: true,
        trim: true
    },

    price: {
        type: Number,
        // required: true
    },

    description: {
        type: String,
        // required: true,
        trim: true
    },
    weight: {
        type: String,
        // required: true,
        trim: true
    },

    img: [
        {
            img: {
                type: String,
                // required: true,
            }
        }
    ],
    updatedAt: Date,

}, { timestamps: true });

module.exports = mongoose.model('StandMonument', standMonumentSchema);