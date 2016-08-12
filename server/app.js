var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var likes = require('./routes/likes');
var bios = require('./routes/bios');

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/likes", likes);

app.use("/bios", bios);

app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';

  console.log(req.params[0]);

  res.sendFile(path.join(__dirname, './public', file))
})













app.listen(app.get('port'), function () {
  console.log('Server now running at port ', app.get('port'));
});
