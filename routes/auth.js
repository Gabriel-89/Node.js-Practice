const express = require("express");

const authController = require("../controllers/auth.js") //Importamos nuestro auth desde controllers, ese archivo
// se encarga de checkear nuestro formulario

const router = express.Router(); //llamamos al metodo router, que NOS SIRVE PARA REDIRECCIONAR! en este caso, lo siguiente:

router.post("/register", authController.register); //ATENTO ESTA LINEA O J O!

// La linea 8 esta pidiendo que luego de enviar el formulario:

// 1) REDIRECCIONEMOS /register hacia la funcion que almacenamos en authController , es decir "../controllers/auth.js"

// 2) y desde auth.js ejecutamos el metodo register 

// exports.register = (req, res) => {

//     res.send("El Formulario se envió correctamente")

// }

module.exports = router;
