const mongoose = require('mongoose')

const workshopSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: true,
        min: 5,
        max: 100
    },
    // pictureOne: {
    //     type: String,
    //     required: true,
    // },
    // descriptionOne: {
    //     type: String,
    //     required: true,
    //     min: 10,
    //     max: 900
    // },
    // pictureTwo: {
    //     type: String,
    //     required: true,
    // },
    // headingTwo: {
    //     type: String,
    //     required: true,
    //     min: 10,
    //     max: 30
    // },
    // descriptionTwo: {
    //     type: String,
    //     required: true,
    //     min: 10,
    //     max: 100
    // },
    // listTwo: [
    //     {
    //         listTwoText: {
    //             type: String,
    //             required: true,
    //             min: 10,
    //             max: 100
    //         }
    //     }
    // ],
    // pictureThree: {
    //     type: String,
    //     required: true,
    // },
    // headingThree: {
    //     type: String,
    //     required: true,
    //     min: 10,
    //     max: 30
    // },
    // descriptionThree: {
    //     type: String,
    //     required: true,
    //     min: 10,
    //     max: 100
    // },
    // listThree: [
    //     {
    //         listThreeText: {
    //             type: String,
    //             required: true,
    //             min: 10,
    //             max: 100
    //         }
    //     }
    // ]

}, { timestamps: true })

module.exports = mongoose.model("Workshop", workshopSchema)
