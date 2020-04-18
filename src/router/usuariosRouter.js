const express = require('express');
// const app = express();
const Router = express.Router();

Router.get('/', (req, res) => {
    console.log("req", req.url);
    res.json({
        nombre: "claejs",
        titulo: "primera clase"
    })
})

Router.post('/', (req, res) => {
    console.log("req", req.url);
    res.json({
        nombre: "clase nodejs",
        titulo: "primera clase"
    })
})

module.exports = Router;
