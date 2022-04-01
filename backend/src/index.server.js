const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

//routes
const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/admin/auth")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const cartRoutes = require("./routes/cart")
const initialDataRoutes = require("./routes/admin/initialData")
const pageRoutes = require("./routes/admin/page")
const addressRoutes = require("./routes/address")
const orderRoutes = require("./routes/order")
const adminOrderRoute = require("./routes/admin/order.routes")
const galleryRoute = require("./routes/gallery")
const applicationRoute = require("./routes/application")
const mainImageRoutes = require("./routes/components/mainImage")
const manufactureRoutes = require("./routes/components/manufacture")
const headerRoutes = require("./routes/components/header")
const comeToUsRoutes = require("./routes/components/comeToUs")
const workshopRoutes = require("./routes/pages/workshop")
const promotionsRoutes = require("./routes/components/promotions")
const weWorkOnlineRoutes = require("./routes/components/weWorkOnline")
const chooseMemorialPhotosRoutes = require("./routes/components/chooseMemorialPhotos")
const engravingRoutes = require("./routes/admin/engraving")
const contactRoutes = require("./routes/components/contact")
const warrantyRoutes = require("./routes/components/warranty")
const graniteMaterialRoutes = require("./routes/graniteMaterial")
const paymentListInstructionRoutes = require("./routes/components/paymentListInstruction")
const paymentMethodRoutes = require("./routes/components/paymentMethod")
const catalogTitleRoutes = require("./routes/components/catalogTitle")
const costDeliveryRoutes = require("./routes/components/costDelivery")
const standMonumentRoutes = require("./routes/components/standMonument")
const graniteTilesRoutes = require("./routes/components/graniteTiles")
const tombstoneCurbRoutes = require("./routes/components/tombstoneCurb")
const footerRoutes = require("./routes/components/footer")

env.config();

mongoose.connect(
  `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@granite-shard-00-00.qrgua.mongodb.net:27017,granite-shard-00-01.qrgua.mongodb.net:27017,granite-shard-00-02.qrgua.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-dzfsmh-shard-0&authSource=admin&retryWrites=true&w=majority`,
  // `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@granite-shard-00-00.qrgua.mongodb.net:27017,granite-shard-00-01.qrgua.mongodb.net:27017,granite-shard-00-02.qrgua.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-dzfsmh-shard-0&authSource=admin&retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false

  }
).then(() => {
  console.log('Database connected')
})


app.use(cors())
app.use(express.json())
app.use("/public", express.static(path.join(__dirname, "uploads")))
app.use("/api", authRoutes)
app.use("/api", adminRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", cartRoutes)
app.use("/api", initialDataRoutes)
app.use("/api", pageRoutes)
app.use("/api", addressRoutes)
app.use("/api", orderRoutes)
app.use("/api", adminOrderRoute)
app.use("/api", galleryRoute)
app.use("/api", applicationRoute)
app.use("/api", mainImageRoutes)
app.use("/api", manufactureRoutes)
app.use("/api", headerRoutes)
app.use("/api", comeToUsRoutes)
app.use("/api", graniteMaterialRoutes)
app.use("/api", workshopRoutes)
app.use("/api", promotionsRoutes)
app.use("/api", weWorkOnlineRoutes)
app.use("/api", chooseMemorialPhotosRoutes)
app.use("/api", engravingRoutes)
app.use("/api", contactRoutes)
app.use("/api", warrantyRoutes)
app.use("/api", paymentListInstructionRoutes)
app.use("/api", paymentMethodRoutes)
app.use("/api", catalogTitleRoutes)
app.use("/api", costDeliveryRoutes)
app.use("/api", standMonumentRoutes)
app.use("/api", graniteTilesRoutes)
app.use("/api", footerRoutes)
app.use("/api", tombstoneCurbRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Server in running on port ${process.env.PORT}`)
})
