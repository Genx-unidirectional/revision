//Q- write typescript function to check character at given index is uppercase or not

function isUpperCase(str: string, index: number) {
  const char = str[index];
  if (char.toUpperCase() === char) {
    return true;
  } else {
    return false;
  }
}

// console.log(isUpperCase("timB", 2));

//Q- Write function to extract unique character from string,(eg: "aabacdebcdef","abcdef")

function extractNew(str: string) {
  const set = new Set(str.split(""));
  return [...set].join("");
}
// console.log(extractNew("sdiffisjdfsaaals"));

function extractNew2(str: string) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (ans.indexOf(str[i]) === -1) {
      ans += str[i];
    }
  }
  return ans;
}
// console.log(extractNew2("sdiffisjdfsaaals"));

// Q- Write the function which return largest string in the string array

function bigStr(arr: string[]) {
  let bLength = 0;
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    if (bLength < arr[i].length) {
      str = arr[i];
    }
  }
  return str;
}

// console.log(bigStr(["jamaica", "china", "russia", "india", "switchzerland"]));

// Q- write function to count vowels in string

function countVowels(str: string) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("let me do something for my peoples"));
