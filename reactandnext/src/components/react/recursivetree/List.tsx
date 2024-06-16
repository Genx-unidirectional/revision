import { TreeDataType } from "@/config/react";
import Sucker from "./Sucker";
function List({ sections }: { sections: TreeDataType[] }) {
  return (
    <ul>
      {sections.map((item) => {
        return <Sucker folder={item} />;
      })}
    </ul>
  );
}
export default List;
