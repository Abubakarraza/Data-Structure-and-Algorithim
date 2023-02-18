const recursion = (x) => {
  console.warn(x);
  if (x < 10) {
    recursion(x + 1);
  }
};
let data = 0;
recursion(data);
const getFactorial = (x) => {
  if (x >= 1) {
    return x * getFactorial(x - 1);
  }
  return 1;
};
let num = 5;
const factorial = getFactorial(num);
console.warn(factorial, 'factorial');
