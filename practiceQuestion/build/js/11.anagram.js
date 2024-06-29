"use strict";
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
//checking th anagram with other method
//steps: clear the string >> store the character count >> check count of both string is same or not
function clearStr(str) {
    return str.replace(/[\W]/g, "");
}
// now we have the object having count of each char in the the string
function charRecord(str) {
    let clearedStr = clearStr(str);
    const strRecord = {};
    for (let char of clearedStr) {
        strRecord[char] = ++strRecord[char] || 1;
    }
    return strRecord;
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
console.log(checkAnagram2("coding money", "money coding!"));
