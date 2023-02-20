// Not in JS that frequently: range error
const numbers = [4,23,54,34,33];
// You should not do it (most of the time)
numbers.length = 2;
console.log(numbers);
console.log(numbers.length);

// reference error
// console.log(money);
const money = 80;

// syntax error
// for(let i=0; i</5; i++){

// }