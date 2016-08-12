//this fil returns an array of object. Each object includes
// our name, bio, and url
//The like button is added when we append to the DOM
var express = require("express");
var router = express.Router();
var adam = require("./adam");
var corey = require("./corey");
var jackie = require("./jackie");
var liz = require("./liz");

router.use("/adam", adam);

router.use("/corey", corey);

router.use("/jackie", jackie);

router.use("/liz", liz);

module.exports = router;
