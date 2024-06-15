import { useEffect, useState } from "react";

function TypeEffect() {
  const [text, setText] = useState("");

  function remove(num: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
        setText((prev) => prev.substring(0, num - 1));
      }, 100);
    });
  }

  async function takeOut(num: number) {
    for (let i = num; i > 0; i--) {
      await remove(i);
    }
  }
  function add(str: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
        setText((prev) => prev + str);
      }, 200);
    });
  }

  async function inject(text: string) {
    for (let b = 0; b < text.length; b++) {
      await add(text[b]);
    }
  }

  function waiter() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
      }, 1000);
    });
  }
  async function writer(arr: string[]) {
    while (true) {
      for (let c = 0; c < arr.length; c++) {
        await inject(arr[c]);
        await waiter();
        await takeOut(arr[c].length);
      }
    }
  }

  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      writer(arr);
    }
    return () => {
      ignore = true;
    };
  }, []);
  return (
    <div className="h-20 w-5/6 bg-white flex justify-center items-center">
      <h1 className="text-4xl text-black">{text}</h1>
    </div>
  );
}
export default TypeEffect;
const arr = ["jake the joke", "tim cooke", "wander the urge", "let's dive in"];
