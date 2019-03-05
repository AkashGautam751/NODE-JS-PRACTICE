var fs= require('fs');

//synchronous method
/*
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');
*/

//asynchronous method
/*
fs.mkdir('stuff',function(){
  fs.readFile('readMe.txt','utf8',function(err, data) {
    fs.writeFile('./stuff/writeMe.txt', data, function(){});
  });
});
*/

fs.unlink('./stuff/writeMe.txt', function () {
    fs.rmdir('stuff',function(){});
});
