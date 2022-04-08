const mongoose = require('mongoose');


const ceramicsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        // required: true,
    },

    price: {
        type: Number,
        // required: true
    },

    description: {
        type: String,
        // required: true,
    },
    weight: {
        type: String,
        // required: true,
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

module.exports = mongoose.model('Ceramics', ceramicsSchema);