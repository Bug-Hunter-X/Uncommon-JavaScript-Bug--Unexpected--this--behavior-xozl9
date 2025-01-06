function foo(a, b) {
  return a + b;
}

function bar(c) {
  return foo(c, 10);
}

console.log(bar(5)); // Output: 15

//Uncommon bug:  Incorrect usage of 'this' keyword in a method if the method is called without an object instance.

function myMethod() {
  console.log(this);
}

myMethod(); // Output: Window (or undefined in strict mode) - Unexpected behavior if 'this' was intended to reference an object.