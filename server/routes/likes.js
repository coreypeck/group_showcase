//This page needs to return an object with our name as a property and the like count as the value
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
