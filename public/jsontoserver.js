var http= require('http');
var fs= require('fs');

var server= http.createServer(function(req, res){
    console.log('req was made: '+req.url);
    res.writeHead(200, {'Content-Type' : 'application/json'});

    var myobj= {
      name: 'akash',
      job: 'ninja',
      age: 20
    };
    res.end(JSON.stringify(myobj));
});

server.listen(3000, '127.0.0.1');
console.log('server is listening.....');
