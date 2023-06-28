// object
// ---> make one object who contain your detail like - name,age,multiple vehicles
// -name,and one function print your name and then do below given task

// let details = {
//   name: "kalpesh",
//   age: 23,
//   vehicles: ["hero", "splender", "shine"],

//   printdetail() {
//     console.log("name", this.name);
//   },
// };

let details = {
  name: "kalpesh",
  age: 20,
  vehicles: ["Car", "Bicycle", "motorcycle"],

  printName() {
    console.log("Name:", this.name);
  },
};

// Task 1: Print all values of the details object
console.log("Name:", details.name);
console.log("Age:", details.age);
console.log("Vehicles:", details.vehicles);

// Task 2: Add a function named printAge to the object
details.age = 24;
details.printAge = function () {
  console.log("Age:", this.age);
};
details.printAge();

// // Task 3: Get all keys
let keys = Object.keys(details);
console.log("Keys:", keys);

// // Task 4: Get all values
let values = Object.values(details);
console.log("Values:", values);

// // Task 5: Add a key for the city name
details.city = "surat";
console.log("City:", details.city);

// // Task 6: Delete the age key from the object
// delete details.age;
// console.log("Age:", details.age); // Will print undefined

// // Task 7: Add a function named addAge to the object
details.addAge = function (years) {
  console.log("New Age:", this.age + years);
};

details.addAge(5); // Pass the number of years to add to the age
