let breadth = 12;

function callback(this: { breadth: number }) {
  this.breadth = 2;
  return this.breadth;
}

const testObj = {
  breadth: 10,
  getStuff: (callback: () => number) => {
    callback();
  },
};

// testObj.getStuff(callback);
callback();
