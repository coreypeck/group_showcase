//Needs to be able to take a POST to update the likes
var express = require("express");
var router = express.Router();
var addLikes = require("./addLikes");

var adam = {
  name: "Adam",
  bio: "Straight Chillin/I’m a multi-instrumentalist with a multi-interest mind.",
  img:'../assets/images/adam',
  likesCount: 0
}
router.post("/", function(req, res){
  addLikes.addLikes(adam);
  res.sendStatus(200);
});
router.get("/", function(req, res){
  res.send(adam);
});
module.exports = router;
