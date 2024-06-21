import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-green-400">{children}</div>;
}
export default layout;
