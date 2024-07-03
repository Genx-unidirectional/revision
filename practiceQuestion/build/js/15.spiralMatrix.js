"use strict";
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
function spiralPattern(size) {
    const result = [];
    for (let i = 0; i < size; i++) {
        result.push([]);
    }
    let rS = 0;
    let rE = size - 1;
    let cS = 0;
    let cE = size - 1;
    let counter = 1;
    while (rS < rE && cS < cE) {
        for (let i = 0; i <= cE; i++) {
            result[rS][i] = counter;
            counter++;
        }
        rS++;
        for (let i = rS; i <= rE; i++) {
            result[i][cE] = counter;
            counter++;
        }
        cE--;
        for (let i = cE; i >= cS; i--) {
            result[rE][i] = counter;
            counter++;
        }
        rE--;
        for (let i = rE; i >= rS; i--) {
            result[i][cS] = counter;
            counter++;
        }
    }
    return result;
}
console.log(spiralPattern(4));
