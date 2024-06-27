"use strict";
//Q-find maximum character appear in the string
//In order to get the maximum appearance of thr character we can store the appearance in object
function maxCharInStr(str) {
    const charRecord = {};
    let max = 0;
    let maxChar = "";
    for (let char of str) {
        charRecord[char] = ++charRecord[char] || 1;
    }
    for (let key in charRecord) {
        if (charRecord[key] > max) {
            max = charRecord[key];
            maxChar = key;
        }
    }
    return maxChar;
}
console.log(maxCharInStr("jjttjmtmmm"));
