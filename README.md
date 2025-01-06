# Uncommon JavaScript Bug: Unexpected 'this' behavior

This repository demonstrates a common yet easily overlooked JavaScript bug related to the `this` keyword. When methods are invoked without an object context (e.g., a direct function call), the value of `this` can be unexpected. 

The `bug.js` file contains a function that incorrectly uses `this`. The solution and its explanation are found in `bugSolution.js`.