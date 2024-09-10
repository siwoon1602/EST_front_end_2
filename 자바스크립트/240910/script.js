const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const second = arr.filter((num) => {
  return num % 2 === 0;
});
const double = second.map((num) => num ** 2);

const sum = double.reduce((a, c) => {
  return a + c;
}, 0);

console.log(sum);
