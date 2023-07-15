//-> make one array who have value from 1 to 10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. print 9th and 10th index of array
// console.log(arr[8], arr[9]);
// 2. print every element of array by map and for loop
// arr.map((Element) => {
//   console.log(Element);
// });
// for loop
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 3. change a value of 6th index with 100
// arr[6] = 100;
// console.log(arr);

// 4. print a array till element value not grater then 100
// let newarr = arr.filter((Ele) => {
//   Ele < 100;
// });
// console.log(arr);

// 5. add 1 in every element of an array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let newarr = arr.map((e) => {
//   return e + 1;
// });
// console.log(newarr);

// 6. add 0 in start of array
// arr.unshift(1);
// console.log(arr);

// 7. add  99 in end of array
// arr.push(99);
// console.log(arr);

// 8. remove 1 element from start of  array

// arr.shift();
// console.log(arr);

// 9. remove 1 element from end of array
// arr.pop();
// console.log(arr);

// 10. do sum of all value of an array with use of map, reduce and for-loop

// let sum = 0;
// arr.map((ele) => {
//   sum += ele;
// });
// console.log(sum);

// let sum = arr.reduce((arr, ele) => {
//   return arr + ele;
// });
// console.log(sum);

// sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// 11. sort a array in acending decending
// arr.sort();
// console.log(arr);
// arr.sort(function (a, b) {
//   return b - a;
// });
// console.log(arr);

// 12. reverce an array with use of method
// arr.reverse();
// console.log(arr);

//13. reverce an array with use of for-loop

//  let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//  let length = array.length;

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr[i] = arr.length - i;
// }
// console.log(arr);
// console.log(newArr);

// task-2
// 1. give all value which can devided by 2 - not use filter
// let arr = [1, 2, 3, 6, 7, 9, 3, 56, 8];

// let newArr = [];
// arr.map((ele, idx) => {
//   if (ele % 2 == 0) {
//     newArr.push(ele);
//   }
// });
// console.log(newArr);

// 2. give all value above 3 by use of filter
// let filterarr = arr.filter((ele) => {
//   return ele > 3;
// });
// console.log(filterarr);

// 3. give index of 56
// console.log(arr.indexOf(56));

//4. give true/false result when check given value is exists in array or not

// let Isinarry = (value) => {
//   if (arr.includes(value)) {
//     console.log("Exists");
//     return true;
//   } else {
//     console.log("Not Exists");
//     return false;
//   }
// };

// Isinarry(56);
// Isinarry(65);
// Isinarry(1);
// // Isinarry(100);

// let arr = ["i", "am", "kalpesh"];
// console.log(arr);
// //   arr.reverse();
// //   console.log(arr);
// let newArr = [];
// let l = arr.length - 1;
// for (let i = 0; i <= l; i++) {
//   newArr[i] = arr[l - i];
// }
// console.log(newArr);
