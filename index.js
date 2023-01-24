const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3038;
app.use(express.json());

app.use(require("./routes/books.route"));
app.use(require('./routes/clients.route'))
app.use(require('./routes/genres.route'))
app.use(require('./routes/reviews.route'))

mongoose
  .connect("mongodb+srv://khasiev:malsy1999@cluster0.yzc6knt.mongodb.net/libraryV2")
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(port, () => {
  console.log("conected");
});
