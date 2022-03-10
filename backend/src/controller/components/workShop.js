const WorkShop = require("../../models/components/workShop")


exports.createWorkShop = (req, res) => {
    try {
        const { heading, descriptionOne, descriptionTwo, descriptionThree } = req.body
        const comeToUs = new WorkShop({
            heading: heading,
            descriptionOne: descriptionOne,
            descriptionTwo: descriptionTwo,
            descriptionThree: descriptionThree

        })
        workShop.save((error, workShop) => {
            if (error) return res.status(400).json({ message: "Ошибка при создании!" })
            if (workShop) return (
                res.status(201).json({ workShop, message: "Создано успешно!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.getWorkShop = (req, res) => {
    try {
        WorkShop.find({}).exec((error, workShop) => {
            if (error) return res.status(400).json({ error, message: "Проблема при получении данных!" })
            if (workShop) return (
                res.status(200).json({ workShop, message: "Данные успешно получены!" })
            )
        })
    } catch (e) {
        res.status(500).json(e.message)
    }
}

exports.updateWorkShop = async (req, res) => {
    try {
        const payload = req.body
        if (payload._id) {
            const update = await WorkShop.findOneAndUpdate(
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

exports.deleteWorkShop = (req, res) => {
    try {
        const { _id } = req.body
        WorkShop.deleteOne({ _id }).exec((error, comeToUs) => {
            if (error) return res.status(400).json({ message: "Id не найден" })
            if (comeToUs) return (
                res.status(202).json({ message: "Удаление шапки прошло успешно" })
            )
        })

    } catch (e) {
        res.status(500).json(e.message)
    }
}
