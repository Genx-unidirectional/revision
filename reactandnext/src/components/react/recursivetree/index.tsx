import { TreeDataType, TREEDATA } from "@/config/react";
import List from "./List";
function RecursiveTree() {
  return (
    <div className="h-[500px] w-[500px] bg-white">
      <List sections={TREEDATA} />
    </div>
  );
}
export default RecursiveTree;
