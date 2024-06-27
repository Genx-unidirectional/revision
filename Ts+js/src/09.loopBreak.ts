let count = 0;

function testLoop() {
  while (true) {
    if (count == 12) {
      console.log("got out");
      return;
    }
    count++;
  }
}

testLoop();
