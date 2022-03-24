
const mongoose = require("mongoose");
const TombstoneCurb = require("../../models/components/tombstoneCurb");

exports.createTombstoneCurb = (req, res) => {

  const { name, size, price, description, weight } = req.body;
  let img = [];

  if (req.files) {
    img = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const tombstoneCurb = new TombstoneCurb({
    name,
    size,
    price,
    description,
    img,
    weight,
  });

  tombstoneCurb.save((error, tombstoneCurb) => {
    if (error) return res.status(400).json({ error });
    if (tombstoneCurb) {
      res.status(201).json({ tombstoneCurb });
    }
  });
};

exports.getTombstoneCurb = (req, res) => {
  try {
    TombstoneCurb.find({}).exec((error, tombstoneCurb) => {
      if (error) return res.status(400).json({ message: "Ошибка при получении данных!" })
      if (tombstoneCurb) return (
        res.status(200).json({ tombstoneCurb, message: "Данные успешно получены!" })
      )
    })
  } catch (e) {
    res.status(500).json(e)
  }
}



exports.updateTombstoneCurb = async (req, res) => {
  const { id } = req.params;
  const tombstoneCurb = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No tombstoneCurb with id: ${id}`);

  const updatedContact = await TombstoneCurb.findByIdAndUpdate(id, tombstoneCurb, { new: true });

  res.json(updatedContact);
}

exports.deleteTombstoneCurb = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No tombstoneCurb with id: ${id}`);
  await TombstoneCurb.findByIdAndDelete(id);

  res.json({ message: "Удален успешно" });
}

