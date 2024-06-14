import cn from "@/lib/utils";
import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [tempRate, setTempRate] = useState(0);
  return (
    <div
      className="flex p-8 bg-red-500 gap-5 rounded-lg"
      onMouseLeave={() => setTempRate(0)}
    >
      {"abcde".split("").map((item, idx) => {
        return (
          <div
            className={cn("h-6 w-6 bg-white", {
              "bg-yellow-300": tempRate > idx || rating > idx,
            })}
            onClick={() => setRating(idx + 1)}
            onMouseOver={() => {
              setTempRate(idx + 1);
            }}
          ></div>
        );
      })}
    </div>
  );
}
export default StarRating;
