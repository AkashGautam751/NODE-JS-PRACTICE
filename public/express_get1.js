var express= require('express');

var app= express();

app.get('/', function(req, res)
{
   res.send('akash gautam');
});

app.get('/contact', function(req, res){
   res.send('contact me');
});

app.get('/profile/:id', function(req, res){
   res.send('the id entered is: '+ req.params.id);
});

app.listen(3000);
console.log('server is listening....');
