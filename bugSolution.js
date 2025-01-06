function foo(a, b) {
  return a + b;
}

function bar(c) {
  return foo(c, 10);
}

console.log(bar(5)); // Output: 15

// Correct usage of 'this' keyword
const myObject = {
  value: 10,
  myMethod: function() {
    console.log(this.value); // 'this' correctly refers to myObject
  }
};

myObject.myMethod(); // Output: 10

//Alternative using arrow function
const myObject2 = {
  value: 20,
  myMethod: () => {
    console.log(this); // 'this' will be the global object (Window, or undefined in strict mode)
  }
};

myObject2.myMethod(); // Output: Window (or undefined in strict mode)