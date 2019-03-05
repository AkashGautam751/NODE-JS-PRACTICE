var fs= require('fs');
//synchronous method
/*
var readMe= fs.readFileSync('readMe.txt','utf8');
console.log(readMe);

fs.writeFileSync('writeMe.txt',readMe);
*/

//asynchronous method
/*
fs.readFile('readMe.txt','utf8', function(err, data){
  fs.writeFile('writeMe.txt', data, function(){});
});
*/

fs.unlink("writeMe.txt", function(){});
