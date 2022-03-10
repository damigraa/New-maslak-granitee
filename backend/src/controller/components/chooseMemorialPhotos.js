const ChooseMemorialPhotos = require("../../models/components/chooseMemorialPhotos")


exports.createChooseMemorialPhotos = (req, res) => {
    try {
        const { heading, title, description, image } = req.body
        const chooseMemorialPhotos = new ChooseMemorialPhotos({
            heading: heading,
            title: title,
            description: description,
            image: image
        })

        chooseMemorialPhotos.save((error, chooseMemorialPhotos) => {
            if (error) return res.status(400).json({ message: "Ошибка при создании!" })
            if (chooseMemorialPhotos) return (
                res.status(201).json({ chooseMemorialPhotos, message: "Создано успешно!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getChooseMemorialPhotos = (req, res) => {
    try {
        ChooseMemorialPhotos.find({}).exec((error, chooseMemorialPhotos) => {
            if (error) return res.status(400).json({ message: "Проблема при получении данных!" })
            if (chooseMemorialPhotos) return (
                res.status(200).json({ chooseMemorialPhotos, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.updateChooseMemorialPhotos = async (req, res) => {
    try {
        const payload = req.body
        if (payload._id) {
            const update = await ChooseMemorialPhotos.findOneAndUpdate(
                { _id: payload._id },
                payload,
                { new: true }
            )
            return res.status(200).json({ update, message: "Данные успешно обновлены!" })
        } else {
            res.status(400).json({ message: "Id не найден!" })
        }
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.deleteChooseMemorialPhotos = (req, res) => {
    try {
        const { chooseMemorialPhotosId } = req.body.payload
        ChooseMemorialPhotos.deleteOne({ _id: chooseMemorialPhotosId }).exec((error, chooseMemorialPhotos) => {
            if (error) return res.status(400).json({ message: "Id не найден" })
            if (chooseMemorialPhotos) return (
                res.status(202).json({ message: "Удаление шапки прошло успешно" })
            )
        })

    } catch (e) {
        res.status(500).json(e.message)
    }
}
