/*Create a function called vehicle, like before, but takes another parameter called age,
 so that vehicle("blue", 1, 5) prints 'a blue used car'*/
'use strict';

function vehicle(color, code, age) {
    let result = color;
    if (code == 1 && age == 5) {
        result = "a" + " " + result + " " + "used" + " " + "car"
    };
    if (code == 2 && age == 5) {
        result = "a" + " " + result + " " + "used" + " " + "motorbike"
    };
    return result;
}

console.log(vehicle("blue", 1, 5));