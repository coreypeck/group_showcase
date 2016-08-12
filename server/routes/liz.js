var express = require("express");
var router = express.Router();
var addLikes = require("./addLikes");

var liz = {
  name: "Liz",
  bio: "I’m the fun ‘Auntie Wiz’ who sneaks cookies to my kick-ass nephew, JJ",
  img: "../assets/images/liz",
  likesCount: 0
}

router.post("/", function(req, res){
  addLikes.addLikes(liz);
  res.sendStatus(200);
});
router.get("/", function(req, res){
  res.send(liz);
});
module.exports = router;
