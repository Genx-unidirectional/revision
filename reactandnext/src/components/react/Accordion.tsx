import cn from "@/lib/utils";
import { useState } from "react";

function Accordion() {
  const [single, setSingle] = useState<boolean>(true);
  const [open, setIsOpen] = useState<number>();
  const [items, setItems] = useState<number[]>([]);
  const handleSingle = (id: number) => {
    setIsOpen(id);
  };
  const handleMultiple = (id: number) => {
    if (items.includes(id)) {
      setItems((prev) => prev.filter((item) => item !== id));
    } else {
      setItems((prev) => [...prev, id]);
    }
  };
  return (
    <div className="flex">
      {single ? (
        <button onClick={() => setSingle(false)}>multiple</button>
      ) : (
        <button onClick={() => setSingle(true)}>single</button>
      )}

      <div className="w-[400px]">
        {data.map((item, idx) => {
          return (
            <div className="flex  text-black bg-white flex-col p-2">
              <label
                onClick={() =>
                  single ? handleSingle(idx) : handleMultiple(idx)
                }
                htmlFor=""
              >
                {item.topic}
              </label>
              <div
                className={cn("hidden bg-white ", {
                  "block bg-white": single ? open === idx : items.includes(idx),
                })}
              >
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Accordion;

const data = [
  {
    topic: "Mental health",
    description:
      "When you do something over your failures and it's a constant action towards something important then it's going to get somewhere",
  },
  {
    topic: "Success",
    description: "Constant action towards planned small goals, It's a work",
  },
  {
    topic: "Failure",
    description:
      "Failure is past if the information is important enough so remember it if not then let it go ",
  },
  {
    topic: "Distraction",
    description:
      "enemy , success killer, fatal error are the similar words to this remove this and make your way clean",
  },
];
