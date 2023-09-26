const { Router } = require("express");

const {
  getAllUsuario,
  postUsuario,
  getUsuario,
  putUsuario,
  deleteUsuario,
} = require("../controllers/usuario");

const {
  getAllPelicula,
  postPelicula,
  getPelicula,
  putPelicula,
  deletePelicula,
} = require("../controllers/peliculas");

const appRouter = Router();

/**
 * * ENDPOINTS - USUARIOS
 */

appRouter.get("/usuario-todos", async (Req, Resp) => {
  try {
    const result = await getAllUsuario();
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

appRouter.post("/nuevo-usuario", async (Req, Resp) => {
  try {
    if (Object.entries(Req.body).length == 0) {
      return Resp.send("Faltan campos (usuario)");
    }
    const result = await postUsuario(Req.body);
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

appRouter.put("/obtener-usuario/:dni", async (Req, Resp) => {
  try {
    const { dni } = Req.params;
    if (!dni) {
      return Resp.send("Faltan campos (dni)");
    }
    const result = await getUsuario(dni);
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

appRouter.put("/actualizar-usuario/:dni", async (Req, Resp) => {
  try {
    const { dni } = Req.params;
    if (!dni) {
      return Resp.send("Faltan campos (dni)");
    }
    if (Object.entries(Req.body).length == 0) {
      return Resp.send("Faltan campos (usuario)");
    }
    const result = await putUsuario(dni, Req.body);
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

appRouter.delete("/eliminar-usuario/:dni", async (Req, Resp) => {
  try {
    const { dni } = Req.params;
    if (!dni) {
      return Resp.send("Faltan campos (dni)");
    }
    const result = await deleteUsuario(dni);
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

/**
 * * ENDPOINTS - PELICULAS
 */

appRouter.get("/pelicula-todos", async (Req, Resp) => {
  try {
    const result = await getAllPelicula();
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

appRouter.post("/nueva-pelicula/:rol", async (Req, Resp) => {
  try {
    const { rol } = Req.params;
    if (!rol && Object.entries(Req.body).length == 0) {
      return Resp.send("Faltan campos (rol y pelicula)");
    }
    const result = await postPelicula(rol, Req.body);
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

appRouter.get("/obtener-pelicula/:id", async (Req, Resp) => {
  try {
    const { id } = Req.params;
    if (!id) {
      return Resp.send("Faltan campos (id)");
    }
    const result = await getPelicula(id);
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

appRouter.put("/actualizar-pelicula/:id", async (Req, Resp) => {
  try {
    const { id } = Req.params;
    if (!id) {
      return Resp.send("Faltan campos (id)");
    }
    if (Object.entries(Req.body).length == 0) {
      return Resp.send("Faltan campos (pelicula)");
    }
    const result = await putPelicula(id, Req.body.rol, Req.body.pelicula);
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

appRouter.delete("/eliminar-pelicula/:id", async (Req, Resp) => {
  try {
    const { id } = Req.params;
    if (!id) {
      return Resp.send("Faltan campos (id)");
    }
    const result = await deletePelicula(id);
    Resp.json(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  appRouter,
};
