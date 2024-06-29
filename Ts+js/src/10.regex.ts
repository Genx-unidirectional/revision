//character class

const reg1 = /ga[xyz]esh/g;

const testStr = "let make cake gayesh and well deserved gayesh";
// console.log("let make cake gayesh".search(reg1));

// console.log(reg1.test(testStr));

// console.log(reg1.exec(testStr));

// console.log(testStr.match(reg1));
// console.log(testStr.matchAll(reg1));

//character classes

const reg2 = /ga[^a-b]esh/; //not between a-b

const reg3 = /ga.esh/; //any shit rather than line terminators
// const reg3 = /ga.esh/s;  line terminators included

// console.log(testStr.match(reg2));

const reg4 = /ga[\w]esh/;
const regStr4 = "ga1esh";

const reg5 = /ga[\W]esh/;
const regStr5 = "ga!esh";

const reg6 = /ga[\d]esh/;
const regStr6 = "ga4esh";

const reg7 = /ga[\D]esh/;
const regStr7 = "ganesh";

const reg8 = /ga[\s]esh/;
const regStr8 = "ga nesh"; //here matches nesh

const reg9 = /ga[\S]esh/;
const regStr9 = "ga esh"; // here matches ga

//Assertions

const reg10 = /^A/m; //m :line break flag enabled
const regStr10 = "Absolute Aisaster";

// console.log(reg10.exec(regStr10));

const reg11 = /t$/;
const regStr11 = "hello tet";
// console.log(reg11.exec(regStr11));

const reg12 = /\boo/;
const regStr12 = " oon";
// console.log(reg12.exec(regStr12));

const reg13 = /oo\b/;
const regStr13 = " moo n";
// console.log(reg13.exec(regStr13));

const reg14 = /\Boo/;
const regStr14 = " moon";
// console.log(reg14.exec(regStr14));

const reg15 = /oo\B/;
const regStr15 = " moon";
// console.log(reg15.exec(regStr15));

const reg16 = /x(?=y)/;
const regStr16 = "xyzer";
// console.log(reg16.exec(regStr16));

const reg17 = /x(?!y)/;
const regStr17 = "xjyer";
// console.log(reg17.exec(regStr17));

const reg18 = /(?<=y)x/;
const regStr18 = "yxjyer";
// console.log(reg18.exec(regStr18));

const reg19 = /(?<!y)x/;
const regStr19 = "xjyer";
// console.log(reg19.exec(regStr19));

//Quantifiers

// const reg20 = /ga[\w]*esh/;
const reg20 = /gan*esh/;
// const regStr20 = "gannnkmkkkoknnnesh";
const regStr20 = "gannnnnesh";

// console.log(reg20.exec(regStr20));

const reg21 = /gan+esh/;
const regStr21 = "gannnnesh";
// console.log(reg21.exec(regStr21));

const reg22 = /gan?esh/;
const regStr22 = "gaesh";
// console.log(reg22.exec(regStr22));

const reg23 = /gan{2}esh/;
const regStr23 = "gannesh";
// console.log(reg23.exec(regStr23));

const reg24 = /gan{2,4}esh/;
const regStr24 = "gannnnesh";
// console.log(reg24.exec(regStr24));

const reg25 = /gan{2,}esh/;
const regStr25 = "gannnnnnnnesh";
// console.log(reg25.exec(regStr25));

const reg26 = /gan+?esh/;
const regStr26 = "ganesh";
console.log(reg26.exec(regStr26));
