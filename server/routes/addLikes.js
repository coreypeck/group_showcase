var express = require("express");
var router = express.Router();

exports.addLikes = function(person){
  person.likesCount++
  return person;
}
