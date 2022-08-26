//Require

const express = require("express")  //Import Express package

const app = express();   //export express modules

const port = 4000;  //PORT

const mysql = require("mysql");  //Import mysql package

const dotenv = require("dotenv");  //Import dotenv package

const path = require("path");   //Import node.js native module "path"

const publicDirectory = path.join(__dirname, "./public")  // path to public folder, where we can find our styles.css file



// app.js CONFIG

app.use(express.static(publicDirectory)) //Set our public folder statically with our app

app.set("view engine","hbs")    // HBS config, see documentation

app.use("/", require("./routes/pages")); // Importacion de nuestras rutas desde el path
// routes => pages.js (NO SE ESCRIBE LA EXTENSION! .js)

app.use("/auth", require("./routes/auth"))

app.listen(port, () => console.log(`Server iniciado en puerto: ${port}`)) //Port setting

app.use(express.json()) //Express.json nos va a parsear los datos para poder enviarlos a nuestra DB (sea la que fuere), 
// siempre debe recibir los datos como json

//Database Creation, with dotenv protection

dotenv.config({path:"./.env"})  //path to .env file, this is our defense against hackers. We alone can see this PATH!
//and its location.

//Connection with our database, using method .createConection (see mysql documentation)

var db = mysql.createConnection({

  database : process.env.DATABASE,
  host     : process.env.DATABASE_USERS,
  user     : process.env.DATABASE_USER,
  password : process.env.DATABASE_PASSWORD

});

//Database Warning if ( error / Success ) in conection

db.connect((error) => {

  if (error) {

console.log(error);

  } else {

        console.log("La conexion a mysql se realizo con exito")
  }
  

});










