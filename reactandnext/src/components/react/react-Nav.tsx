import { MINI_PROJECTS_ARR } from "@/config/react";
import Link from "next/link";
import React from "react";
function ReactNav() {
  return (
    <div className="flex items-center flex-col justify-evenly bg-slate-800   mx-auto w-full h-full ">
      {MINI_PROJECTS_ARR.map((item, idx) => {
        return (
          <Link className="font-medium text-lg" href={`/react/${idx}`}>
            {item}
          </Link>
        );
      })}
    </div>
  );
}
export default ReactNav;
