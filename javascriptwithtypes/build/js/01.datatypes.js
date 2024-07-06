"use strict";
//Data types
//Primitive have string, number, boolean
//When we assign value to the variable the copy of that value is assign example,
const a = 12;
const b = a;
const c = 22, d = 33;
//The non primitive data types
//Array , object ,function are non primitives
//When we assign non primitive value to another variable to another the reference of that variable is assign  to it changes made in that also reflect in the first variable
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4);
// console.log(arr2);
//to avoid this we can assign the copy of that variable to another
const obj1 = {
    name: "ganesh",
    age: 32,
};
const obj2 = { ...obj1 };
const arr3 = [1, 3, 3, [1, 2, 3]];
const arr4 = arr3.slice(0);
// const arr4 = [...arr3];
// console.log(arr3);
//@ts-ignore
// console.log(arr4[3].push(5));
// console.log(arr3);
// console.log(arr4);
// in above code the 4th element if the arr3 is array and while using the spread operator we think that we are assigning the copy of that fourth bet it's an array inside array so there is memory reference is assign to that to avoid this we have to use some different   method
const arr5 = [23, 43, 23, [3, 4, 1]];
const arr6 = JSON.parse(JSON.stringify(arr5));
//@ts-ignore
console.log(arr6[3].push(5));
console.log(arr5);
console.log(arr6);
//symbols
//Maps, sets, wealMaps, weakSets
