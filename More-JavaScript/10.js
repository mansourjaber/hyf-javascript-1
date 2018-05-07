/*use the list of vehicles to write an advertisement. So that it prints something like:
 cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

Hint, the output should be correct English with all the punctuation in place (that's the challenge).
So plurals for the vehicle types, commas followed by a single space,
the word and to replace the final comma and closed off by a period.*/
"use strict";

let vehicleType = ["car", "motorbike", "caravan", "bike"]
for (let i = 0; i < vehicleType.length; i++) {
    vehicleType[i] = vehicleType[i] + 's';
}
let text = vehicleType.join(", ");
let advertisement = text.replace("caravans,", "caravans and");

console.log("Amazing Joe's Garage, we service" + " " + advertisement + ".");
// this is a static code it does not work