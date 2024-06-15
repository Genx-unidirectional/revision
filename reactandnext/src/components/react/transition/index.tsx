import { useState } from "react";
import AboutTab from "./About";
import Contacts from "./Contact";
import Posts from "./Posts";
import Button from "./Button";
const tabArr = [
  {
    name: "about",
    component: <AboutTab />,
  },
  {
    name: "posts",
    component: <Posts />,
  },
  {
    name: "contacts",
    component: <Contacts />,
  },
];
function TabTransition() {
  const [tab, setTab] = useState("about");
  return (
    <div>
      <div>
        {tabArr.map((item) => {
          return (
            <Button
              isActive={tab === item.name}
              setTab={setTab}
              tab={item.name}
            />
          );
        })}
      </div>
      <div>
        {tabArr.map((item) => {
          if (item.name === tab) {
            return item.component;
          }
        })}
      </div>
    </div>
  );
}
export default TabTransition;
