import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 w-full h-full bg-purple-500 text-black font-bold">
      <div className="col-span-3">
        <Link href={"/parallel/teama"}>Team A</Link>
        <Link href={"/parallel/teamb"}>Team B</Link>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}
export default layout;
