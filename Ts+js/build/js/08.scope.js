"use strict";
let breadth = 12;
function callback() {
    this.breadth = 2;
    return this.breadth;
}
const testObj = {
    breadth: 10,
    getStuff: (callback) => {
        callback();
    },
};
// testObj.getStuff(callback);
callback();
