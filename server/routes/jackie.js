var express = require("express");
var router = express.Router();
var addLikes = require("./addLikes");

var jackie = {
  name: "Jackie",
  bio: "More coffee, less drama",
  img: "../assets/images/jackie",
  likesCount: 0
}

router.post("/", function(req, res){
  addLikes.addLikes(jackie);
  res.sendStatus(200);
});
router.get("/", function(req, res){
  res.send(jackie);
});
module.exports = router;
