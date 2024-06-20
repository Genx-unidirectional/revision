import Link from "next/link";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      <header className="w-full h-20 bg-black text-white flex justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Streaming the content
        </h1>
        <Link href={"/streaming/contents"}>Get Contents</Link>
      </header>
      <div>{children}</div>
    </div>
  );
}
export default layout;
