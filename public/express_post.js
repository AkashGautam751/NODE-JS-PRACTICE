var express= require('express');
var bodyParser= require('body-parser');

var urlencodedParser= bodyParser.urlencoded({extended: false})

var app= express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
   res.render('index');
});

app.get('/contact', function(req, res){
  console.log(req.query);
   res.render('contact',{qs: req.query});
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body);
   res.render('contact',{qs: req.query});
});


app.get('/profile/:name', function(req, res){
  var data= {age: 29, job: 'ninja', hobbies: ['fishing','eating','singing','boating']};
   res.render('profile', {person :  req.params.name,data: data});
});

app.listen(3000);
