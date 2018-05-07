//Create an object and a function that takes the object as a parameter and prints out all of its properties and values
'use strict';
function Car(company, model, year) {
    this.company = company;
    this.model = model;
    this.year = year;
};
var myCar = new Car("Nissan", "Datsun", 1980);
console.log(myCar);