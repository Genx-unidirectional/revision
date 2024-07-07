"use strict";
// console.log("hey here we \r go");
// console.log("hey here we \v go");
// console.log("hey here we \bgo");
// console.log("hey here we \f go");
const longString = "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
// `open the shit`
const str = "let's roll the anger into some work";
function countChar(str, char) {
    let count = 0;
    let pastIdx = str.indexOf(char);
    while (pastIdx !== -1) {
        pastIdx = str.indexOf(char, pastIdx + 1);
        count++;
    }
    return count;
}
const objStr = new String("tim");
// console.log(objStr.valueOf());
// console.log(countChar(str, "e"));
// console.log(str.lastIndexOf("t"));
// console.log(str.startsWith("l"));
// console.log(str.padEnd(str.length + 3, "t"));
// console.log(str.concat("jim".repeat(3)));
// console.log(str.endsWith("k"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
const str2 = "ganesh";
// console.log(str2.slice(0, 2));
// console.log(str2.split(""));
// console.log(str2.length);
// console.log(str2.charAt(0));
// console.log("   sobber  ".trim());
// console.log(str.substring(0, 10));
// console.log(str.substring(10, -1));
// console.log(str.slice(0, -1));
// console.log(str.includes("into"));
//Q-Create function to reverse the string
function reverseStr(str) {
    return str.split("").reverse().join("");
}
// console.log(reverseStr2("jim"));
function reverseStr2(str) {
    let reversedString = "";
    for (let char of str) {
        reversedString = char + reversedString;
    }
    return reversedString;
}
//Q-function to check palindrome
function checkPalindrome(str) {
    return str === str.split("").reverse().join("");
}
// console.log(checkPalindrome("mim"));
//Q-check character at given index is uppercase or not
function checkLowerCase(str, index) {
    if (str[index] === str[index].toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(checkLowerCase("JaB", 0));
//Q- write javascript function to extract unique string characters from string eg,aabbrrff ans:abrf
function uniqueChar(str) {
    let newStr = "";
    for (let char of str) {
        if (!newStr.includes(char)) {
            newStr += char;
        }
    }
    return newStr;
}
// console.log(uniqueChar("aabbrrff"));
//Q-find maximum character appear in the string
function maxChar(str) {
    let charRecord = {};
    for (let char of str) {
        charRecord[char] = charRecord[char];
    }
}
//Q-make string in to title
function makeTitle(str) {
    return str
        .split(" ")
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(" ");
}
// console.log(makeTitle(str));
//Regex
//character classes
const testStr = "let make cake gayesh and well deserved gayesh";
const reg1 = /gan[\w]esh/g;
console.log(reg1.test(testStr));
//Check given pair of string are anagram of each other
//example ["safety! rail!","fairy tales"] ==>true
//example ["coding money", money coding] ==>true
//only consider capital letters| exclude punctuation and spaces
