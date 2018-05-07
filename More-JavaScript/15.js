/*Write some code to test two arrays for equality using == and ===. Test the following:

    let x = [1,2,3];
    let y = [1,2,3];
    let z = y;
What do you think will happen with x == y, x === y and z == y and z == x? Prove it!

Don't cheat! Seriously - try it first.

Check out this Fiddle. You need to open your browser’s Developer Tools to see the console output. 
Press the Run button in the upper right corner to run the code.

More insights from this Stack Overflow question.*/
"use strict";

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

// x & y
if (x == y) { console.log("x & y are equal using ==") }
else { console.log("x & y are not equal using ==") }
if (x === y) { console.log("x & y are equal using ===") }
else { console.log("x & y are not equal using ===") }

// z & y
if (z == y) { console.log("z & y are equal using ==") }
else { console.log("z & y are not equal using ==") }
if (z === y) { console.log("z & y are equal using ===") }
else { console.log("z & y are not equal using ===") }

// x & z
if (x == z) { console.log("x & z are equal using ==") }
else { console.log("x & z are not equal using ==") }
if (x === z) { console.log("x & z are equal using ===") }
else { console.log("x & z are not equal using ===") }