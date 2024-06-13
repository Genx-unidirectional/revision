import ReactNav from "@/components/react/react-Nav";

import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full  grid grid-cols-9">
      <div className="col-span-3  h-screen overflow-hidden ">
        <ReactNav />
      </div>
      <div className="col-span-6 overflow-hidden overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}
export default layout;
