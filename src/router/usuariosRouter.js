const express = require('express');
const Router = express.Router();
const UsuariosController = require("../controllers/UsuariosController");
const validateRequest = require("../middlewares/validationMiddleware");

Router.get('/', (req, res) => {
    UsuariosController.getUser(req, res)
});

Router.get('/:id', (req, res) => {
    UsuariosController.getUserById(req, res)
})

Router.post('/', validateRequest, (req, res) => {
    UsuariosController.postNewUser(req, res)
})

module.exports = Router;