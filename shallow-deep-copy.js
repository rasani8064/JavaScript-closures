var h = {
  name: "raju",
  age: 20,
};

var k = h; //shallow copy
var k = { ...h }; //deep copy

k.age = 21;

console.log(k);
console.log(h);
