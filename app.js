const http = require('http');

http.createServer(function (req, res) {
  res.write('54444333333333333112221foooooooooo barrrrr');
  res.end();
}).listen(8080, '0.0.0.0');
