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
const reg1 = /ga[a-zA-Z0-9]esh/g;
// console.log(reg1.test(testStr));
const reg2 = /ga\Wesh/; //don't include alphanumerics
// console.log(reg2.test("ga!esh"));
const reg3 = /ga[\w]esh/; // same as [a-zA-Z0-9]
// console.log(reg3.test("ganesh"));
const reg4 = /ga[\d]esh/; // this is for digit
// console.log(reg4.test("ga2esh"));
const reg5 = /ga[\D]esh/; // this is for non-digit
// console.log(reg5.test("ganesh"));
const reg6 = /[\s]e/g;
// console.log(reg6.exec("tim error et"));
const reg7 = /[\S]e/;
// console.log(reg7.exec("tim erroret"));
const reg8 = /\beto/;
// console.log(reg7.exec("tim eto"));
//assertions
const reg9 = /^g/;
// console.log(reg9.exec("ganesh"));
const reg10 = /h$/;
// console.log(reg10.exec("ganesh"));
const reg11 = /a(?=n)/;
// console.log(reg11.exec("ganesh"));
const reg12 = /a(?!n)/;
// console.log(reg12.exec("gaesh"));
const reg13 = /(?<=g)a/;
// console.log(reg13.exec("gaesh"));
const reg14 = /(?<!g)a/;
// console.log(reg14.exec("oaesh"));
const reg15 = /\boo/;
// console.log(reg15.exec("tim just got violated  oop's"));
// Quantifiers
const reg16 = /gan*esh/;
// console.log(reg16.exec("gannnnnesh"));
const reg17 = /gan.esh/;
// console.log(reg17.exec("ganpesh"));
const reg18 = /gan+esh/;
// console.log(reg18.exec("gannnesh"));
const reg19 = /gan?esh/;
// console.log(reg19.exec("gaesh"));
const reg20 = /gan{1,2}esh/;
// console.log(reg20.exec("gannesh"));
const reg21 = /gan{1,}esh/;
// console.log(reg21.exec("gannnnesh"));
const reg22 = /gan{1}esh/;
// console.log(reg22.exec("ganesh"));
//Check given pair of string are anagram of each other
//example ["safety! rail!","fairy tales"] ==>true
//example ["coding money", money coding] ==>true
//only consider capital letters| exclude punctuation and spaces
function clearString(str) {
    return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join("");
}
function checkAnagram(str1, str2) {
    return clearString(str1) === clearString(str2);
}
// console.log(checkAnagram("coding money", "money coding!"));
function clearStr(str) {
    return str.replace(/[\W]/g, "");
}
function charRecord(str) {
    const clearedString = clearStr(str);
    const charRecord = {};
    for (let char of clearedString) {
        charRecord[char] = charRecord[char]++ || 1;
    }
    return charRecord;
}
function checkAnagram2(str1, str2) {
    const strObj1 = charRecord(str1);
    const strObj2 = charRecord(str2);
    if (Object.keys(strObj1).length !== Object.keys(strObj2).length) {
        return false;
    }
    for (let key in strObj1) {
        if (strObj1[key] !== strObj2[key]) {
            return false;
        }
    }
    return true;
}
// console.log(checkAnagram2("coding money", "money coding!"));
//Q-count vowels in the string
function countVowels(str) {
    let count = 0;
    const vowelArr = ["a", "e", "i", "o", "u"];
    for (let char of str) {
        if (vowelArr.includes(char)) {
            count++;
        }
    }
    return count;
}
// console.log(countVowels("james gotta do some work"));
function countVowels2(str) {
    const count = str.match(/[aeiou]/g);
    return count?.length;
}
// console.log(countVowels2("james gotta do some work"));
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
function stepShape(n) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            line += "*";
        }
        console.log(line);
    }
}
// stepShape(4);
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
function pyramid(num) {
    const mid = Math.floor((num * 2 - 1) / 2);
    for (let row = 0; row < num; row++) {
        let line = "";
        for (let col = 0; col < num * 2 - 1; col++) {
            if (col >= mid - row && col <= mid + row) {
                line += "*";
            }
            else {
                line += " ";
            }
        }
        console.log(line);
    }
}
pyramid(3);
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
function spiralMatrix(num) {
    // first create the matrix passed num * num
    const mat = [];
    for (let i = 0; i < num; i++) {
        mat.push([]);
    }
    let rS = 0;
    let rE = num - 1;
    let cS = 0;
    let cE = num - 1;
    let counter = 1;
    while (rS < rE && cS < cE) {
        for (let i = 0; i <= cE; i++) {
            mat[rS][i] = counter;
            counter++;
        }
        rS++;
        for (let i = rS; i <= rE; i++) {
            mat[i][cE] = counter;
            counter++;
        }
        cE--;
        for (let i = cE; i >= cS; i--) {
            mat[rE][i] = counter;
            counter++;
        }
        rE--;
        for (let i = rE; i >= rS; i--) {
            mat[i][cS] = counter;
            counter++;
        }
        cS++;
    }
    return mat;
}
console.log(spiralMatrix(4));
