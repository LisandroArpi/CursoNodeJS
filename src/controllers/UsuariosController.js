const axios = require("axios");
const fetch = require("node-fetch");
class UsuariosController {
    /**
     * attribute: una variable de una clase.
     * method: una función de una clase.
     */

    
    static getUser(req, res) {
        console.log("req", req.url);
        res.json({
            nombre: "clase get sin user",
            titulo: "primera clase"
        })
    }

    static getUserById(req, res) {
        console.log("req.params", req.params);
        const id = req.params.id
        if (id == 123) {
            res.json({
                nombre: "clase get 123",
                titulo: "primera clase"
            })
        } else {
            res.json({
                nombre: "clase get user by id",
                titulo: "primera clase", 
                id: id
            })
        }
    }

    static postNewUser(req, res) {
        console.log("req.body", req.body);
        res.json({
            nombre: "clase nodejs",
            titulo: "primera clase"
        })
    }

    static async getUserByWeb(req, res) {
        const users = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log("users: ", users.data);
        res.json({
            users: users.data
        })
    }

}

module.exports = UsuariosController;