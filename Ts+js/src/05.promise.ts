function testPromise() {
  return new Promise((resolve, reject) => {
    console.log(1);
    resolve(2);
  });
}

testPromise().then((result) => {
  console.log(result);
});

console.log(3);
