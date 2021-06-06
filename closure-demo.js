/*
A closure is the combination of a function bundled together (enclosed) with references 
to its surrounding state (the lexical environment).
*/

function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}

x();

//second example

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
