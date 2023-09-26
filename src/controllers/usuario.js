const { UsuarioModel } = require("../mongo/models/usuarios.model");

async function getAllUsuario() {
  const usuario = await UsuarioModel.find();
  return usuario;
}
async function postUsuario(data, encargado) {
  if (encargado && encargado.rol === "encargado") {
    const { dni } = encargado;
    const cliente = await new UsuarioModel({ ...data });
    cliente.save();
    const usaurioEncargado = await UsuarioModel.findOneAndUpdate(
      { dni },
      { $push: { clientes: cliente.dni } }
    );
    if (usaurioEncargado !== null) {
      return {
        cliente,
        encargado: usaurioEncargado
      };
    } else {
      return "No existe el encargado!!!";
    }
  }

  const usuario = await new UsuarioModel({ ...data });
  usuario.save();
  return usuario;
}
async function getUsuario(dni) {
  const usuario = await UsuarioModel.findOne({ dni });
  return usuario;
}
async function putUsuario(dni, data) {
  const usuario = await UsuarioModel.findOneAndUpdate({ dni }, { ...data });
  return usuario;
}
async function deleteUsuario(dni) {
  const usuario = await UsuarioModel.findOneAndDelete({ dni });
  return usuario;
}

module.exports = {
  getAllUsuario,
  postUsuario,
  getUsuario,
  putUsuario,
  deleteUsuario,
};
