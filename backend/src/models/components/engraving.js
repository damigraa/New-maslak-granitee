const mongoose = require("mongoose")

const engravingSchema = new mongoose.Schema({
    heading: {
        type: String,
        // required: true,
        min: 1,
        max: 30
    },
    title: {
        type: String,
        // required: true,
        min: 3,
        max: 200
    },
    listText: [],
    description: {
        type: String,
        // required: true,
        min: 1,
        max: 300
    },
    imageTitle: {
        type: String,
        // required: true,
        min: 5,
        max: 50
    },
    engImage: { type: String },

    // engravingImages: [
    //     {
    //         img: { type: String },

    //     }
    // ],
}, { timestamps: true })

module.exports = mongoose.model("Engraving", engravingSchema)