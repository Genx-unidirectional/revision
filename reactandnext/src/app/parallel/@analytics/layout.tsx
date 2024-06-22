import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 w-full h-full bg-orange-600 text-black font-bold">
      <div className="col-span-3">
        <Link href={"/parallel/terms"}>Terms</Link>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
}
export default layout;
