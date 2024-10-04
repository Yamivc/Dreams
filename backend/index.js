const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8100"
};
app.use(cors(corsOptions));


app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// normal use
//db.sequelize.sync();

db.sequelize.sync({ force: false }).then(() => {
  console.log(`-Drop- and resync the db`);
});

app.get("/", (req, res) => {
  res.json({ message: "Dreams api iniciated" });
});

require("./routes/dream.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
