const { Schema, model } = require("mongoose");

const Pelicula = new Schema({
  titulo: String,
  horario: String,
  genero: String,
  calificacion: String
});

const PeliculaModel = model("pelicula", Pelicula);

module.exports = { PeliculaModel };
