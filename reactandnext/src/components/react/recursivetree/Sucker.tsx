import { TreeDataType } from "@/config/react";
import { Children, useState } from "react";
import List from "./List";

function Sucker({ folder }: { folder: TreeDataType }) {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <li>
      <div className="flex gap-4">
        <h2 className="text-black">{folder.name}</h2>
        {folder.childrens !== undefined ? (
          open ? (
            <button
              onClick={() => setOpen(false)}
              className="w-6 text-black h-6"
            >
              -
            </button>
          ) : (
            <button
              onClick={() => {
                if (folder.childrens) {
                  setOpen(true);
                }
              }}
              className="w-6 text-black h-6"
            >
              +
            </button>
          )
        ) : null}
      </div>
      <div className="ml-14">
        {open && folder.childrens !== undefined ? (
          <List sections={folder.childrens} />
        ) : null}
      </div>
    </li>
  );
}
export default Sucker;
