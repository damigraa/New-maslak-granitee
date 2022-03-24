
const mongoose = require("mongoose");
const StandMonument = require("../../models/components/standMonument");

exports.createStandMonument = (req, res) => {

  const { name, size, price, description, weight } = req.body;
  let img = [];

  if (req.files) {
    img = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const standMonument = new StandMonument({
    name,
    size,
    price,
    description,
    img,
    weight,
  });

  standMonument.save((error, standMonument) => {
    if (error) return res.status(400).json({ error });
    if (standMonument) {
      res.status(201).json({ standMonument });
    }
  });
};

exports.getStandMonument = (req, res) => {
  try {
    StandMonument.find({}).exec((error, standMonument) => {
      if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
      if (standMonument) return (
        res.status(200).json({ standMonument, message: "Данные успешно получены!" })
      )
    })
  } catch (e) {
    res.status(500).json(e)
  }
}



exports.updateStandMonument = async (req, res) => {
  const { id } = req.params;
  const standMonument = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No standMonument with id: ${id}`);

  const updatedContact = await StandMonument.findByIdAndUpdate(id, standMonument, { new: true });

  res.json(updatedContact);
}

exports.deleteStandMonument = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No standMonument with id: ${id}`);
  await StandMonument.findByIdAndDelete(id);

  res.json({ message: "контакт удален успешно" });
}

