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

    getUserById(req, res) {
        console.log("req.params", req.params);
        res.json({
            nombre: "clase get user by id",
            titulo: "primera clase"
        })
    }

    postNewUser(req, res) {
        console.log("req.body", req.body);
        res.json({
            nombre: "clase nodejs",
            titulo: "primera clase"
        })
    }

}

module.exports = UsuariosController;