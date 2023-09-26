const { PeliculaModel } = require("../mongo/models/peliculas.model");

async function getAllPelicula() {
  const pelicula = await PeliculaModel.find();
  return pelicula;
}

async function postPelicula(rol, data) {
  if (rol === "administrador" && Object.entries(data).length > 0) {
    const pelicula = await new PeliculaModel({ ...data });
    pelicula.save();
    return pelicula;
  } else {
    return "No eres administrador o no enviaste el objeto pelicula!!!";
  }
}

async function getPelicula(id) {
  const pelicula = await PeliculaModel.findOne({ _id: id });
  return pelicula;
}

async function putPelicula(id, rol, pelicula) {
  if (rol === "administrador" || rol === "encargado") {
    if (!pelicula && !id && !rol) {
      return "Hace falta en el body(rol, pelicula)!!!";
    }
    const peliculaUpdated = await PeliculaModel.findOneAndUpdate(
      { _id: id },
      { ...pelicula }
    );
    return peliculaUpdated;
  } else {
    return "No eres administrador, encargado o no enviaste el objeto pelicula!!!";
  }
}

async function deletePelicula(id) {
  if (id) {
    const pelicula = await PeliculaModel.findOneAndDelete({ _id: id });
    return pelicula;
  } else {
    return "No eres administrador o no enviaste el titulo de la pelicula!!!";
  }
}

module.exports = {
  getAllPelicula,
  postPelicula,
  getPelicula,
  putPelicula,
  deletePelicula,
};
