const mongoose = require("mongoose")

const workShopSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        min: 1,
        max: 30
    },
    iconOne: {
        type: String,
        // required: true,
    },
    descriptionOne: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    iconTwo: {
        type: String,
        // required: true,
    },
    descriptionTwo: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    iconThree: {
        type: String,
        // required: true,
    },
    descriptionThree: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    date: {
        type: Date,
    },
}, { timestamps: true })

module.exports = mongoose.model("ComeToUs", workShopSchema)