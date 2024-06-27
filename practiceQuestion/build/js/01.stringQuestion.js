"use strict";
//Q-Create function to reverse the string
//using javascript
function reverseStr(str) {
    return str.split("").reverse().join("");
}
// console.log(reverseStr("baker"));
//Manual solve
function reverseStr2(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}
// console.log(reverseStr2("taker"));
//Q-Create function to check palindrome
function checkPalindrome(str) {
    return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}
// console.log(checkPalindrome("wiw"));
//Q-function to check character at given index is lower case or not
function checkLower(str, index) {
    return str[index].toLowerCase() === str[index];
}
// console.log(checkLower("JIMoT", 3));
//Q- function to strip leading and trailing spaces form the string
function stripSpaces(str) {
    return str.trim();
}
// console.log(stripSpaces("    hope    "));
