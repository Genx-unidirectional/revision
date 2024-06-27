//Q-Create function to reverse the string

//using javascript
function reverseStr(str: string) {
  return str.split("").reverse().join("");
}

// console.log(reverseStr("baker"));

//Manual solve

function reverseStr2(str: string) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// console.log(reverseStr2("taker"));

//Q-Create function to check palindrome

function checkPalindrome(str: string) {
  return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
}

// console.log(checkPalindrome("wiw"));

//Q-function to check character at given index is lower case or not

function checkLower(str: String, index: number) {
  return str[index].toLowerCase() === str[index];
}

// console.log(checkLower("JIMoT", 3));

//Q- function to strip leading and trailing spaces form the string

function stripSpaces(str: string) {
  return str.trim();
}
// console.log(stripSpaces("    hope    "));

//Q- write javascript function to extract unique string characters from string eg,aabbrrff ans:abrf

function extractUniqueString(str: string) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (newStr.indexOf(str[i]) === -1) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

console.log(extractUniqueString("aabbrrff"));
