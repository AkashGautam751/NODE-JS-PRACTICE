var events= require('events');
var util= require('util');

var Person= function (name) {
  this.name= name;
};

util.inherits(Person, events.EventEmitter);

var akash= new Person('akash');
var aditi= new Person('aditi');
var gautam= new Person('gautam');

var people= [akash,aditi,gautam];

people.forEach(function (person) {
  person.on('speak', function(msg){
    console.log(person.name + ' said:' + msg);
  });
});

akash.emit('speak','hey aditi');
aditi.emit('speak','hi akash');
