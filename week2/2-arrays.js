'use strict';

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals[3] = "turtle";
console.log(favoriteAnimals);
//array.splice(index for the new item, howMany deleted item , item1, ....., itemX)
favoriteAnimals.splice(1, 0, "meerkat");
console.log(favoriteAnimals);
console.log("The array has a length of: ", favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
let index = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at index: ", index);