//Este modulo autentifica el envio correcto o algun error al enviar el formulario

// Estoy introduciendo un metodo dentro de exports que es un objeto que se usa para exportar en node=

// .register es un metodo para registros, nativo de node.js

// exports = {register:(req,res) => etc etc...}

exports.register = (req, res) => {

    res.send("El Formulario se envió correctamente")

}