const express = require('express');
const app = express()
const usuarioRouter = require('./router/usuariosRouter');
const helmet = require("helmet");

app.use(express.json());
app.use(helmet());

/*Middleware: intermedia en una comunicacion
  Router: quien redirige la consulta*/

app.use('/usuarios', usuarioRouter);

app.listen(3000, () => {
  try {
    console.log("Server levantado en el puerto 3000")
  } catch (error) {
    console.log("Error: ", error);
  }
})