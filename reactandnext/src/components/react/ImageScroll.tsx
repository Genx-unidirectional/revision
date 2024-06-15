import { ElementRef, useRef, useState } from "react";

function ImageScroll() {
  const [count, setCount] = useState(0);
  const refContainer = useRef<ElementRef<"ul">>(null);
  const scrollImage = (index: number) => {
    const listNode = refContainer.current;
    const item = listNode?.querySelectorAll("li")[index];
    item?.scrollIntoView({
      behavior: "smooth",
      //   block: "nearest",
      //   inline: "center",
    });
  };
  return (
    <div className="flex flex-col bg-white p-3">
      <div>
        <div className="flex gap-1">
          <button
            className="bg-black text-white p-2 w-16 h-8"
            onClick={() => {
              if (count < 4) {
                setCount((prev) => prev + 1);
              }
            }}
          >
            +
          </button>
          <p className="bg-black text-white p-2 w-16 h-8">{count}</p>
          <button
            className="bg-black text-white p-2 w-16 h-8"
            onClick={() => {
              if (count > 0) {
                setCount((prev) => prev - 1);
              }
            }}
          >
            -
          </button>
        </div>
        <button
          onClick={() => scrollImage(count)}
          className="bg-black rounded-lg p-2 text-white"
        >
          Scroll
        </button>
      </div>
      <ul
        ref={refContainer}
        className="h-[200px] overflow-hidden overflow-y-scroll w-[200px]"
      >
        {imageArr.map((item, idx) => {
          return (
            <li
              style={{ backgroundColor: item.color }}
              className="h-full w-full"
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
export default ImageScroll;

const imageArr = [
  {
    name: "image1",
    color: "pink",
  },
  {
    name: "image2",
    color: "red",
  },
  {
    name: "image3",
    color: "violet",
  },
  {
    name: "image4",
    color: "green",
  },
  {
    name: "image5",
    color: "blue",
  },
];
