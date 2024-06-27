// Q- find number of digits in number

function countDigit(num: number) {
  return num.toString().length;
}

// console.log(countDigit(11122));

//Q- function to get sum of digits

function sumOfDigits(num: number) {
  let copy = num;
  let sum = 0;
  for (let i = 0; i < num; i++) {
    sum += copy % 10;
    copy = Math.floor(copy / 10);
  }
  return sum;
}

// console.log(sumOfDigits(123));

//Q-print the factorial of number

function factorial(num: number): any {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// console.log(factorial(4));

// Q-Write an arrow function named isEven that takes a single number as argument and returns if it is even or not

function isEven(num: number) {
  return num % 2 === 0;
}
