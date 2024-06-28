"use strict";
// Q-make array of chunks of given size eg, ([1,2,3,4,5,6,7,8,9,10],2) =>([[1,2],[3,4]],[5,6],[7,8],[9,10]])
function markArrChunk(arr, chunkSize) {
    let newArr = [];
    let i = 0;
    while (i < arr.length) {
        newArr.push(arr.slice(i, i + chunkSize));
        i += chunkSize;
    }
    return newArr;
}
console.log(markArrChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
