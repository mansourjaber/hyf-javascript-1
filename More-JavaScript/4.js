/*Create a function named vehicleType that receives a color,
and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' 
for example when called as vehicleType("blue", 2)*/
'use strict';
function vehicleType(color, code) {
    let result = color;
    if (code == 1) {
        result = "a" + " " + result + " " + "car"
    };
    if (code == 2) {
        result = "a" + " " + result + " " + "motorbike"
    };
    return result;
}

console.log(vehicleType("blue", 2));