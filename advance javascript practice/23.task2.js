// destructure example

let obj = {
  x: 30,
  y: 40,
};

let m = obj.x;
let n2 = obj.y;

let { a, b } = obj;
console.log(a, b);
let { y, x } = obj;
console.log(x, y);

let array = [5, 6, 7, 8];

let [p, o, ...e] = array;
console.log(o, p);

// recurcing

function rec(x) {
  console.log(x);
  x--;
  if (x > 0) {
    rec(x);
  } else {
    console.log("====finish===");
    return;
  }
}
rec(20);
