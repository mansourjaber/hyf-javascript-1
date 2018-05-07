/*Take a look at the following code:

     let o1 = { foo: 'bar' };
     let o2 = { foo: 'bar' };
     let o3 = o2;
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

Does the order that you assign (o3 = o2 or o2 = o3) matter?*/
"use strict";

console.log("a change to o1 will not affect o3 because they are not related to each other");
console.log("a change to o2 will affect o3 because the value of o2 is assigned to the value o3(const o3 = o2)");

let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
if (o2 === o3) { console.log("the order that you assign (o3 = o2 or o2 = o3) does not matter") }