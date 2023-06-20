let a = {
  x: 10,
  sum: function (y) {
    console.log(this.x + y);
    console.log(this.x * y);
    console.log(this.x / y);
  },
};
a.sum(20);

// function sum(y) {
//   console.log("z:", z);
//   return x + y;
// }

// console.log(sum(2, 4, 6, 8, 10));

// math function

// console.log(Math.min(4, 5, 8, 2, 5, 7)); // min value
// console.log(Math.max(20, 40, 30, 50)); //max value
// console.log(Math.trunc(14.8)); // trunc remove points
// console.log(Math.round(5.7)); // 0.5 up value convert in 1
// console.log(Math.random()); //random value any
// console.log(Math.ceil(7.3));
// console.log(Math.floor(5.3));//same as trunc

// //rest and spread operator
// function sum(x, y, ...z) {
//   console.log("z:", z);
//   return x + y;
// }
// console.log(sum(2, 4, 6, 8, 10));
