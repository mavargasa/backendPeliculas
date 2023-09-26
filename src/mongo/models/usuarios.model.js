const { Schema, model } = require("mongoose");

const Usuario = new Schema({
  dni: String,
  nombres: String,
  apellidos: String,
  fecha_nacimiento: String,
  rol: String,
  telefono: String,
  correo: String,
  contrasena: String,
  nombre_usuario: String,
  clientes: [],
});

const UsuarioModel = model("usuario", Usuario);

module.exports = { UsuarioModel };
