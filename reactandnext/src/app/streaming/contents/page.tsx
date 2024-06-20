import { Suspense } from "react";
import Contents from "../Contents";
import SkeletonContents from "../Skeleton";

function page() {
  return (
    <div className="h-screen w-full">
      <Suspense fallback=<SkeletonContents />>
        <Contents />
      </Suspense>
    </div>
  );
}
export default page;
