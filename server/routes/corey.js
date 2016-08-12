var express = require("express");
var router = express.Router();
var addLikes = require("./addLikes");

var corey = {
  name: "Corey",
  bio: "-Corey is just this guy, you know?- (Probably someone important)",
  img: "../assets/images/corey",
  likesCount: 0
}
router.post("/", function(req, res){
  addLikes.addLikes(corey);
  res.sendStatus(200);
});
router.get("/", function(req, res){
  res.send(corey);
});
module.exports = router;
