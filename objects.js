// Given an array of objects, each object representing a person with a name and age property,
// write a function that returns a new array containing the names of all people who are 18 years old or older. 
// const people = [
//   { name: 'Alice', age: 17 },
//   { name: 'Eunice', age: 22 },
//   { name: 'Charlie', age: 14 },
//   { name: 'Max', age: 19 },
// ];

function allPeople(people) {

    console.log(people.filter(person => person.age>18).map(person => person.name));

}


const people = [
  { name: 'Alice', age: 17 },
  { name: 'Eunice', age: 22 },
  { name: 'Charlie', age: 14 },
  { name: 'Max', age: 19 },
];
allPeople(people);


// Write a function that takes an array of objects, where each object represents a product with a name, 
// price, and category property. The function should return an object that groups the products by their 
// categories, with the category names as keys and the arrays of products as values. const products = [
//   { name: 'Laptop', price: 1200, category: 'Electronics' },
//   { name: 'Shirt', price: 25, category: 'Clothing' },
//   { name: 'Headphones', price: 80, category: 'Electronics' },
//   { name: 'Shoes', price: 60, category: 'Clothing' },
// ];

function myProducts(products) {
  let prod = Object.groupBy(products, product => product.category)
  console.log(prod);
}

const products = [
      { name: 'Laptop', price: 1200, category: 'Electronics' },
      { name: 'Shirt', price: 25, category: 'Clothing' },
      { name: 'Headphones', price: 80, category: 'Electronics' },
      { name: 'Shoes', price: 60, category: 'Clothing' },
];

myProducts(products);

// Given an array of objects, where each object represents a student with a name and an array of scores,
// write a function that returns a new array containing the names of all students whose average score is
//  greater than or equal to 85. const students = [
//   { name: 'John', scores: [90, 80, 85] },
//   { name: 'Jane', scores: [95, 92, 88] },
//   { name: 'Jim', scores: [70, 80, 75] },
//   { name: 'Jill', scores: [85, 90, 84] },
// ];

function allStudents(students){
  const studentAverages = students.map(student => {
    const sum = student.scores.reduce((acc, score) => acc + score);
    return { name: student.name, average: sum / student.scores.length };
  });
  // Use filter to only select students with an average above 90
  const aboveAverage = studentAverages.filter(student => student.average >= 85);
  console.log(aboveAverage);

}
     

const students = [
      { name: 'John', scores: [90, 80, 85] },
      { name: 'Jane', scores: [95, 92, 88] },
      { name: 'Jim', scores: [70, 80, 75] },
      { name: 'Jill', scores: [85, 90, 84] },
];
allStudents(students)

// Given an object representing a car, with properties for the make, model, year, and a method to display the car's 
// information, write a function that takes the car object and adds a new method to the object called age. 
// The age method should return the current age of the car based on the current year and the car's year property. 
// const car = {
//   make: 'Ford',
//   model: 'Ranger',
//   year: 2023,
//   displayInfo: function() {
//     console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
//   },
// };

function myCars(car) {
   car["age"] = (2024 - car.year)
   console.log(car);
  
}
const car = {
  make: 'Ford',
  model: 'Ranger',
  year: 2023,
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
  }
};

myCars(car)


// ADDING A METHOD TO AN OBJECT
// function cities(allCities) {
//   allCities["city"] = {
//     'city': 'Parklands', 'governor': 'Alex', 'population': 90
//   }
//    return allCities

  
  
// }
// const allCities ={
//   'city': 'Nairobi', 'governor': 'Sakaja', 'population': 10,
//   'city': 'Kisumu', 'governor': 'Raila', 'population': 20,
//   'city': 'Machakos', 'governor': 'Mutua', 'population': 5
// }

// console.log();



class Car {
  constructor (make,model,year,isAvailable){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  toggleAvailabity(){
console.log(this.isAvailable = ! this.isAvailable)
}
}


const toyota = new Car("toyota","camry",2020,true);
console.log(toyota);
toyota.toggleAvailabity();


class Rentall{
  constructor(car,rName,rStartDate,rEndDate){
    this.car = car;
    this.rName = rName;
    this.rStartDate = rStartDate;
    this.rEndDate = rEndDate;

  }
  calculateDuration(){
    const duration = this.rEndDate - this.rStartDate
    return duration;
    
  }
}

const myRent = new Rentall("Porsche","Faith","2024-06-04","2024-08-04")
console.log(myRent);

