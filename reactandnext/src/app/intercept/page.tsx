import Link from "next/link";
function page() {
  const modelArr = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-2">
      {modelArr.map((item, idx) => {
        return (
          <Link
            className="w-[100px] rounded-lg flex justify-center items-center h-[100px] bg-white text-black text-3xl font-bold"
            href={`intercept/photo/${item + 1}`}
          >
            {item + 1}
          </Link>
        );
      })}
    </div>
  );
}
export default page;
