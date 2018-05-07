'use strict';

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let myString1 = myString.replace(/,/g, " ");
console.log(myString1);