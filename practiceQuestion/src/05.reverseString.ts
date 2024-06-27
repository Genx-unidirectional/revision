//Q-reverse the string without build in methods

function reverseString(str: string) {
  let newStr = "";

  for (let i = 1; i <= str.length; i++) {
    newStr += str[str.length - i];
  }
  return newStr;
}

// console.log(reverseString("jake"));

// Q-reverse integer

function reverseInteger(num: number) {
  let reverse = "";

  for (let char of num.toString()) {
    reverse = char + reverse;
  }
  return parseInt(reverse) * Math.sign(num);
}

console.log(reverseInteger(1234));
