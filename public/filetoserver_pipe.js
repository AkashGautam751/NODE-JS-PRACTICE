var http= require('http');
var fs= require('fs');

var server= http.createServer(function(req, res){
    console.log('req was made: '+req.url);
    res.writeHead(200, {'Content-Type' : 'text/plain'});

    var myReadStream=fs.createReadStream(__dirname + '/readMe.txt');
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log('server is listening.....');
