const fizzBuzz = () =>
  Array.from({ length: 100 }, (_, i) => {
    const n = i + 1;
    if (n % 15 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";
    return n;
  });

console.log(fizzBuzz());

// const fizzBuzz = () => {
//   const arr = [];
//
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("Fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
