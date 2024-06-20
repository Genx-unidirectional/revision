import { timedData } from "@/lib/lazyfunc";

async function Contents() {
  const data = await timedData();
  return (
    <div className="w-full h-full grid grid-cols-3 gap-4 p-3">
      {data.map((item) => {
        return (
          <div
            className=" h-[100px] rounded-lg flex justify-center items-center"
            style={{ backgroundColor: item.color }}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
export default Contents;
