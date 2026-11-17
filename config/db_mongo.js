const mongoose = require("mongoose");
require('dotenv').config();

mongoose.connect("mongodb://localhost:27017/db_demo");
const db = mongoose.connection;

// Eventos
db.on("error", error => console.log(error));
db.once("open", () => console.log("Conexion con MongoDB estable"));

module.exports = mongoose;