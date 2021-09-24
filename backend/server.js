const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();
const PORT = process.env.PORT || 3000;

// Mongoose configuration
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is mongo not running?")
);
mongoose.connection.on("disconnected", () =>
  console.log("mongoose is disconnected")
);

mongoose.connect("mongodb://localhost:27017/bookmarks", {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose!!");
});

// seed data
const myProducts = [
  {
    name: "World",
    description: "Best holiday ever!",
  },
  {
    name: "hello1",
    description: "All the good dogs are recognized!",
  },
  {
    name: "hello2",
    description: "The feline friends get a day too.",
  },
  {
    name: "hello3",
    description: "We all get to chill out and listen to music!",
  },
];

// seed route
app.get("/seed-products", (req, res, next) => {
  // console.log(holidays);
  Product.insertMany(myProducts)
    .then((res) => console.log(res))
    .catch(next);
  res.send("Products inserted!");
});

// app.use("/", (req, res) => {
//   res.send("Hello World");
// });

app.listen(PORT, () => {
  console.log(`✅ PORT: ${PORT} 🌟`);
});
