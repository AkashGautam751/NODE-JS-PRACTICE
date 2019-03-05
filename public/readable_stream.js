var http= require('http');
var fs= require('fs');

var myReadStream= fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function (chunk) {
  console.log('chunk was recieved: ');
  console.log(chunk);
});
