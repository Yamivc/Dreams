const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models")

// normal use
db.sequelize.sync();

// db.sequelize.sync( {force:true} ).then(() => {
//     console-log(`Drop and resync the db`)
// });

app.get("/", (req, res) => {
    res.json({ message: "Dreams api iniciated"});
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});