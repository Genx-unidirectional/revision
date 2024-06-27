"use strict";
//Q-check palindrome using pinter method
function checkPalindromeTwo(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - (i + 1)]) {
            return false;
        }
    }
    return true;
}
// console.log(checkPalindromeTwo("awa"));
//Q-check palindrome using pointer method
function checkPalindromeWithPointer(str) {
    let leftPointer = 0;
    let rightPointer = str.length - 1;
    while (leftPointer < rightPointer) {
        if (str[leftPointer] !== str[rightPointer]) {
            return false;
        }
        leftPointer++;
        rightPointer--;
    }
    return true;
}
console.log(checkPalindromeWithPointer("awa"));
