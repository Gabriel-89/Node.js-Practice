const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {

      res.render("index") //Method .render is from hbs

})

router.get("/register", (req, res) => {

    res.render("register")

})



module.exports = router;

