import { useState } from "react";

function Tabs() {
  const [tab, setTab] = useState(0);
  const tabArr = [
    {
      name: "Tab 1",
      color: "red",
      description: "This is tab one",
    },
    {
      name: "Tab 2",
      color: "blue",
      description: "This is tab two",
    },
    {
      name: "Tab 3",
      color: "green",
      description: "This is tab three",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        {tabArr.map((item, idx) => {
          return (
            <button
              className="p-3 text-3xl"
              key={`${idx}gg`}
              onClick={() => setTab(idx)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div style={{ color: tabArr[tab].color }}>{tabArr[tab].description}</div>
    </div>
  );
}
export default Tabs;
