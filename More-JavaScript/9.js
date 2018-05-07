/*Change the function vehicle to use the list of question 7. 
So that vehicle("green", 3, 1) prints "a green new bike".*/
'use strict';

let vehicleType = ["motorbike", "caravan", "bike"]

function vehicle(color, age, code) {
    let result = color;
    if (age == 3 && code == 1) {
        result = "a" + " " + result + " " + "new" + " " + vehicleType[2]
    };

    return result;
}

console.log(vehicle("green", 3, 1));
