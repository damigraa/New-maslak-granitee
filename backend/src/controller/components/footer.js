const Footer = require("../../models/footer");
const mongoose = require("mongoose")

exports.createFooter = (req, res) => {
  try {
    const footerObj = {
      title: req.body.title,
      description: req.body.description,

    }
    if (req.file) {
      footerObj.img = req.file.filename

    }
    const footer = new Footer(footerObj)
    footer.save((error, footer) => {
      if (error) return res.status(400).json({ error })
      if (footer) {
        res.status(201).json({ footer })
      }
    })

  } catch (e) {
    res.status(500).json({ message: "ошибка загрузки" })
  }

};

exports.getFooter = (req, res) => {

  Footer.find({}).exec((error, footer) => {
    if (error) return res.status(400).json({ message: "Ошибка загрузки" })
    if (footer) return res.json({ footer })
  })
}
exports.deleteFooter = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No footer with id: ${id}`);
  await Footer.findByIdAndDelete(id);

  res.json({ message: "удален успешно" });
}



exports.updateFooter = async (req, res) => {
  const { id } = req.params;
  const footer = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No footer with id: ${id}`);

  const updatedFooter = await Footer.findByIdAndUpdate(id, footer, { new: true });

  res.json(updatedFooter);
}