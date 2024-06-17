import { ElementRef, useState, useCallback, useEffect, useRef } from "react";

function LazyLoadImage() {
  const percentContainer = useRef<ElementRef<"div">>(null);
  const imgContainer = useRef<ElementRef<"div">>(null);
  const [count, setCount] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout>();
  const [load, setLoad] = useState(false);

  const scale = useCallback(
    (
      changer: number,
      min_in: number,
      max_in: number,
      min_out: number,
      max_out: number
    ) => {
      return (
        ((changer - min_in) * (max_out - min_out)) / (max_in - min_in) + min_out
      );
    },
    []
  );
  const blurring = useCallback(() => {
    setCount((prev) => {
      if (prev > 99) {
        clearInterval(intervalRef.current);
        return prev;
      } else {
        return prev + 1;
      }
    });
  }, []);

  useEffect(() => {
    if (load) {
      intervalRef.current = setInterval(blurring, 30);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [load]);
  useEffect(() => {
    if (percentContainer.current && imgContainer.current) {
      percentContainer.current.style.opacity = `${scale(count, 0, 100, 1, 0)}`;
      imgContainer.current.style.filter = `blur(${scale(
        count,
        0,
        100,
        30,
        0
      )}px)`;
    }
  }, [count]);
  return (
    <div className="lg:w-2/5 h-[300px]  sm:w-1/2 w-4/5 bg-white text-black rounded-lg border border-white   relative">
      <div
        ref={imgContainer}
        className={` h-full w-full  bg-[url('/planeblur.avif')]  rounded-lg flex justify-center items-center bg-cover`}
      ></div>
      <div className="absolute flex justify-center items-center -top-12 w-full">
        <button
          onClick={() => setLoad(true)}
          className="text-lg bg-white text-black font-medium rounded-md px-2 py-1"
        >
          Load
        </button>
      </div>
      <div
        ref={percentContainer}
        className="text-black flex justify-center z-20 items-center absolute w-full h-full top-0 left-0 text-4xl font-medium"
      >
        <p>{count}%</p>
      </div>
    </div>
  );
}
export default LazyLoadImage;
