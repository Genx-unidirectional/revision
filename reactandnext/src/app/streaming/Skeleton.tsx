async function SkeletonContents() {
  return (
    <div className="w-full h-full grid grid-cols-3 gap-4 p-3">
      {"abcde".split("").map((item) => {
        return (
          <div className=" h-[100px] bg-gray-400 animate-pulse rounded-lg flex justify-center items-center">
            <div className="w-[80px] animate-pulse h-8 rounded-sm bg-gray-500"></div>
          </div>
        );
      })}
    </div>
  );
}
export default SkeletonContents;
