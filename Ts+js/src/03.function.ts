//Check output

const height = 10;

function callback() {
  //@ts-ignore
  console.log(this.height);
}

const obj = {
  height: 12,
  method(callback: { (): void }) {
    callback();
  },
};

// obj.method(callback); undefined is returned
// callback();
