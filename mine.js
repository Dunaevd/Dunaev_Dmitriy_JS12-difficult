

let num = 266219;
num = String(num);
let err = num.split('');
console.log(err);
// let muiti = err[0] * err[1] * err[2] * err[3] * err[4] * err[5];

  let numbers = err.reduce((sum, current) => {
     return sum * current;
  });
   console.log(numbers);

let degree = numbers ** 3;

console.log(degree);

let degree2 = String(degree);

console.log(Number(degree2.substring(0, 2)));