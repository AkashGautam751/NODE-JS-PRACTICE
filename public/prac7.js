//1st method
//var counter= function(arr) {
  //return 'There are ' + arr.length + ' elements in array.';
//};

//var adder= function(a,b){
  //return `Sum of 2 nos. is ${a+b}`;
//};

//var pi= 3.142;

//console.log(counter(['akash','aditi','gautam','rana']));
//module.exports.counter= counter;
//module.exports.adder= adder;
//module.exports.pi= pi;

//2nd method

//module.exports.counter= function(arr) {
  //return 'There are ' + arr.length + ' elements in array.';
//};

//module.exports.adder= function(a,b){
  //return `Sum of 2 nos. is ${a+b}`;
//};

//module.exports.pi= 3.142;

//3rd method

var counter= function(arr) {
  return 'There are ' + arr.length + ' elements in array.';
};

var adder= function(a,b){
  return `Sum of 2 nos. is ${a+b}`;
};

var pi= 3.142;

module.exports= {
  counter: counter,
  adder: adder,
  pi: pi
}
