//What does the following code return? (And why?)
"use strict";
const bar = 42;
const result = typeof typeof bar;
console.log(result);
console.log("It returns a string because any typeof-operator will return a word (number, object, array, string...etc) and typeof word is string ");