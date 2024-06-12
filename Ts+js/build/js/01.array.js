"use strict";
//Q- Make typeSafe map function
function mapIt(arr, factor) {
    return arr.map((item) => item * factor);
}
const animals = [
    { fly: () => { } },
    { fly: () => { } },
    { swim: () => { } },
    { fly: () => { } },
    { swim: () => { } },
    { fly: () => { } },
];
function FishGuard(organism) {
    return organism.swim !== undefined;
}
function FishFilter(organism) {
    return organism.filter(FishGuard);
}
// console.log(FishFilter(animals));
//find
function findIt(arr) {
    return arr.find((item) => item.length > 12);
}
// console.log(findIt(["jake", "jokepaul", "timerb", "something has to be done"]));
//findIndex
//findLastIndex
//findLast
//Array form object
const arr = Array.from({ length: 10 }, (_, i) => i);
// console.log(arr);
//Range function : basically we have to make the function which takes the start and stop of array and step of that number series
function range(start, stop, step) {
    return Array.from({ length: (start + stop) / step + 1 }, (_, i) => start + step * i);
}
// console.log(range(0, 10, 3));
//Q- write function to delete all occurrence of specified number in the array
function deleteNum(arr, num) {
    return arr.filter((item) => item !== num);
}
function deleteNum2(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        0;
        if (arr[i] !== num) {
            newArr.push(arr[i]);
        }
    }
    arr = [...newArr];
}
//Q- Write the program to find number of digits in number
function countNum(num) {
    return num.toString().length;
}
// console.log(countNum(12342));
// Q- write the program to sum the digit in the number
function sumDig(num) {
    let sum = 0;
    let copy = num;
    while (copy > 0) {
        let digit = copy % 10;
        sum += digit;
        copy = Math.floor(copy / 10);
    }
    return sum;
}
// console.log(sumDig(8989));
// Q- print the factorial of n number
// 0! = 0
// 1! = 1
// 2! = 1 * 2
// 3! = 1 * 2 *3
// n! = (n-1)! *n
function fact(num) {
    if (num === 1) {
        return 1;
    }
    return num * fact(num - 1);
}
// console.log(fact(4));
// Q- find the largest number in the array with only positive number
function largePositiveNum(arr) {
    let largestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (largestNum < arr[i]) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}
// console.log(largePositiveNum([3, 4, 303, 111, -10]));
//Q- return array with element which are larger than a specified number
function greatArr(arr, num) {
    return arr.filter((item) => item > num);
}
function greatArr2(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
// console.log(greatArr([22, 322, 131, 432, 234], 400));
// console.log(greatArr2([22, 322, 131, 432, 234], 400));
// Q- Write function to generate random number from specified by start and stop
function generateRandomNumber(start, stop) {
    return Math.floor(Math.random() * (stop - start) + start);
}
// console.log(generateRandomNumber(1, 2));
// Q- Write the function which accept the array of numbers and returns average of those number
function arrayAverage(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
}
// console.log(arrayAverage([35, 33, 31, 32, 34]));
// Q write the function which check given number is even or not
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// Q- square  and sum the array using arrow function and find the average of them
const sumAndSquareAndAvg = (arr) => {
    const square = arr.map((item) => item ** item);
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
};
// console.log(sumAndSquareAndAvg([2, 3, 4, 5]));
//Q-create function which adds up some value to each element of array and returns new array
function incrementedArr(arr, num) {
    return arr.map((item) => item + num);
}
// console.log(incrementedArr([3, 2, 43, 1], 10));
//Q-create function which turns the string element of array  into uppercase of form only first letter
function upFirstLetter(arr) {
    return arr.map((item) => item[0].toUpperCase() + item.slice(1));
}
console.log(upFirstLetter(["tim", "jake", "mathew"]));
// Q- create the function which return array of number with beside of it's value doubled
function doubleArr(arr) {
    return arr.flatMap((item) => [item, item * 2]);
}
// console.log(doubleArr([2, 4, 11, 34, 2]));
