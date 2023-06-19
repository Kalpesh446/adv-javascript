// 1. make array of object
// let person = [
//   { name: "kush", age: 12 },
//   { name: "tej", age: 10 },
//   { name: "smit", age: 18 },
//   { name: "ram", age: 20 },
// ];
// - print only name of person with use of map

// let names = person.map((person) => {
//   return person.name;
// });
// console.log("names>", names);

// // - total age of all person
// let totalAge = person.reduce((sum, individual) => {
//   return sum + individual.age;
// }, 0);
// console.log("total age=>--", totalAge);

// - count how many people in the array (without use of length method)
// let counter = person.reduce((counter) => {
//   return counter + 1;
// }, 0);
// // console.log(counter);

// 2nd method to count

// let count = 0;
// person.map((e) => {
//   return count++;
// });
// console.log(count);

// - give new array which have only person who have age gretter then 18

// let filteredPersons = person.filter((individual) => {
//   return individual.age > 18;
// });
// console.log(filteredPersons);

// sort array by actual value

// let sortArr = [1, 30, 32, 4, 21, 100000];
// //  want = 1,4,21,30,32,10000
// let accendingearr = sortArr.sort((a, b) => {
//   return a - b;
// });
// console.log(accendingearr);

// let Details = {
//   name: "kalpesh",
//   surname: "chavada",
//   age: 20,
//   add: {
//     city: "surat",
//   },
//   vehical: ["hero", "splender", { a: 10 }],
//   fun1: (x) => {
//     console.log("x", x);
//     return x;
//   },
// };
// print all value
// console.log(Details); // all value print of object
// console.log("name=>", Details.name);
// console.log("surname=>", Details.surname);
// console.log("age=>", Details.age);
// console.log("add=>", Details.add);
// console.log("city=>", Details.add.city);
// console.log("vehical", Details.vehical);
// console.log("vehical:", Details.vehical[0]);
// console.log("vehical:", Details.vehical[1]);
// console.log("vehical:", Details.vehical[2]);
// console.log("vehical:", Details.vehical[2].a);
// console.log("function:", Details);

// f1() => {name:''} //= 'chavada'
// f2()=> { name :'', age:''}// = 'chavada kalpesh'
// f3()=> { name :'', age:'',add:''} //= 'chavada kalpesh pravinbhai'

// fun1(fun2(fun()))

// function fun1(val1) {
//   console.log(val1);
//   val1.age = 23;
//   fun2(val1);
// }

// function fun2(val1) {
//   console.log(val1);
//   val1.add = "surat";
//   fun3(val1);
// }

// function fun3(val1) {
//   console.log(val1);
// }

// var obj = { name: "kalpesh" };
// fun1(obj);

// fun1(data){
// console.log(data)
// data.age=23
//   fun2(data){
// console.log(data)
// data.add='surat'
//     fun3(data){
// console.log(data)
//     }
//   }
// }

// var obj = {name:'urvish'}
// fun1(obj)

// function f1(){
//   var = object store  ={}
//   function f2 (obj){
//      update a obj
//      function f3 (obj){
//  update obj
//       console .log(final obj)
//      }
//   }
// }

function fun1(data) {
  return new Promise((resolve, reject) => {
    console.log(data);
    data.age = 23;
    resolve(data);
  });
}

function fun2(data) {
  return new Promise((resolve, reject) => {
    console.log(data);
    data.add = "surat";
    resolve(data);
  });
}

function fun3(data) {
  return new Promise((resolve, reject) => {
    console.log(data);
    resolve(data);
  });
}

var obj = { name: "kalpesh" };

fun1(obj)
  .then(fun2)
  .then(fun3)
  .catch((error) => {
    console.error(error);
  });

// //try and catch
// function fun1(data) {
//   return new Promise((resolve, reject) => {
//     try {
//       console.log(data);
//       data.age = 23;
//       resolve(data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// function fun2(data) {
//   return new Promise((resolve, reject) => {
//     try {
//       console.log(data);
//       data.add = "surat";
//       resolve(data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// function fun3(data) {
//   return new Promise((resolve, reject) => {
//     try {
//       console.log(data);
//       resolve(data);
//     } catch (error) {
//       reject(error);
//     }
//   });
// }

// var obj = { name: "kalpesh" };

// fun1(obj)
//   .then(fun2)
//   .then(fun3)
//   .catch((error) => {
//     console.error(error);
//   });

// do it in promise callback and in try-catch
