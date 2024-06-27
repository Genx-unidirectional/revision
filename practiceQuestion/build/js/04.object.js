"use strict";
//Q-create the function which gives random number between 1 to 6
function diceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}
//Q- write function to  generate random number between range
function randNum(start, end) {
    const diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
// console.log(randNum(1, 10));
// Q-write a function called mergeObjects that accepts two objects and returns a new object containing all the keys and values of the first and second objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// console.log(mergeObjects({ name: "ganesh" }, { age: 12 }));
