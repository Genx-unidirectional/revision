"use strict";
// Q-function to get first n elements of an array
function getFirstElem(arr, num) {
    return arr.slice(0, num);
}
// console.log(getFirstElem([2, 3, 4, 5], 4));
// Q- write function to get last elements of an array
function getLastElem(arr, num) {
    return arr.slice(arr.length - num, arr.length);
}
// console.log(getLastElem([1, 2, 3, 4, 5, 6], 4));
//Q-function to check element exists in array
function checkElem(arr, num) {
    //   return arr.findIndex((item) => item === num) !== -1;
    return arr.some((item) => item === num);
}
// console.log(checkElem([2, 3, 44, 321, 31], 3));
//Q-function to delete all occurrences of given num
//js build in  specific
function deleteAllOccurrences(arr, num) {
    return arr.filter((item) => item !== num);
}
// console.log(deleteAllOccurrences([3, 2, 1, 4, 3, 442, 12, 3], 3));
//manual
function deleteAllOccurrences2(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i) {
        if (arr[i] !== num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(deleteAllOccurrences2([3, 2, 1, 4, 3, 442, 12, 3], 3));
//Q-find largest number in array with only positive numbers
function largestNum(arr) {
    let largestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (largestNum < arr[i]) {
            largestNum = arr[i];
        }
    }
    return largestNum;
}
// console.log(largestNum([23, 44123, 3, 44444444]));
//Q-function which return array elements larger than number
function filteredArrWithNum(arr, num) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// console.log(
//   filteredArrWithNum(
//     [
//       2, 3, 44, 21, 34, 2, 2, 44, 2222, 3322, 322, 2332, 233, 44, 4, 6, 7755,
//       67,
//     ],
//     50
//   )
// );
// Q- write function which returns longest string in array
function longestString(arr) {
    let maxLength = 0;
    let largestString = "";
    for (let i = 0; i < arr.length; i++) {
        if (maxLength < arr[i].length) {
            maxLength = arr[i].length;
            largestString = arr[i];
        }
    }
    return largestString;
}
// console.log(longestString(["timtim", "baker", "temba"]));
// Q-write function to count number of vowels in string argument
function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u") {
            count++;
        }
    }
    return count;
}
// console.log(countVowels("eat your shit"));
//Q-write function to get the average of number array
function averageOfAllNum(arr) {
    return arr.reduce((acc, curr) => curr + acc, 0) / arr.length;
}
// console.log(averageOfAllNum([389809090998, 400098989898, 5090909009]));
// Q-square and sum the array elements using an arrow function, and then find the average of the array
function sumSquareAvg(arr) {
    let squareArr = arr.map((item) => item ** 2);
    let sum = squareArr.reduce((acc, curr) => curr + acc, 0);
    return sum / arr.length;
}
// console.log(sumSquareAvg([3, 4, 5]));
//Q-create a new array where each element is equal to the original element plus 5
function arrElemChanger(arr, factor) {
    return arr.map((item) => item + factor);
}
// console.log(arrElemChanger([1, 2, 3, 4], 1));
// Q- create a new array whose elements are the uppercase versions of the words present in the original array
function uppercaseArray(arr) {
    // return arr.map((item) => item.toUpperCase());
    return arr.map((item) => item[0].toUpperCase() + item.slice(1, item.length));
}
// console.log(uppercaseArray(["tim", "grey"]));
// Q- write a function called doubleAndReturnArgs that accepts an array and a variable number of arguments, and returns a new array with the original array values and all of the additional arguments doubled
function doubleExtraArgs(arr, ...args) {
    return arr.concat(args.map((item) => item + item));
}
// console.log(doubleExtraArgs([1, 2, 3], 4, 5));
