const http = require('http');

http.createServer(function (req, res) {
  res.write('6666654444333333333333112221foooooooooo barrrrr');
  res.end();
}).listen(8080, '0.0.0.0');
