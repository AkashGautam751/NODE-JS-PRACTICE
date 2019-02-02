//normal function statement
//function sayhi(){
//  console.log('hii');
//}

//sayhi();

//sortof callback function
function callFunction(fun){
  fun();
}

//function expression
var saybye = function(){
  console.log('bye');
}

//saybye();
callFunction(saybye);
//
