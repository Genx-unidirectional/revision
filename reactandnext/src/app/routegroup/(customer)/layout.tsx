import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-pink-400">{children}</div>;
}
export default layout;
