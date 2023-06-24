// =============datatype checked===============
//  let a = 5 > 4;
// b = "apple" > "pineapple";
// c = "2" > "12";
// d = undefined == null;
// e = undefined === null;
// f = null == "\n0\n";
// g = null + "\n0\n";

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(g);

// The following function returns true if the parameter age is greater than
//18. Otherwise it asks for a confirmation and returns its result:
let age = 16; // You can change the age value as per your requirement
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}
console.log(checkAge(age));

// a) Create an empty object user.
let user = {};

// b) Add the property name with the value John.
user.name = "John";

// c) Add the property surname with the value Smith.
user.surname = "Smith";

// d) Change the value of the name to Pete.
user.name = "Pete";

// e) Remove the property name from the object.
delete user.name;

let user = { name: "John", years: 30 };

// a) Name property into the variable name.
let { name } = user;

// b) Year's property into the variable age.
let { years: age } = user;

// c) isAdmin property into the variable isAdmin (false, if no such property)
let { isAdmin = false } = user;

//Sum the properties There is a salaries object with arbitrary number of salaries. Write
//the function sumSalaries(salaries) that returns the sum of all salaries using
//Object.values and the for..of loop.If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}
console.log(sumSalaries(salaries)); // Output: 650

//Turn the object into JSON and back Turn the user into JSON and then read it back
//into another variable.

let user = { name: "John Smith", age: 35 };

// Turn the user object into JSON
let userJSON = JSON.stringify(user);

// Read the JSON back into another variable
let userCopy = JSON.parse(userJSON);
