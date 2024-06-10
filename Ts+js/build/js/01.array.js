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
//
