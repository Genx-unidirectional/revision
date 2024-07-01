//Q-count vowels in the string

function countVowels1(str: string) {
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

function countVowels2(str: string) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// console.log(
//   countVowels2("let have some thing so we do it before some things goes wrong")
// );
// console.log(
//   countVowels1("let have some thing so we do it before some things goes wrong")
// );

function countVowels3(str: string) {
  const reg = /[aeiou]/gi;
  return str.match(reg)?.length;
}

// console.log(
//   countVowels3("let have some thing so we do it before some things goes wrong")
// );
