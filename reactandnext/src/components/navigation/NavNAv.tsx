"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
function NavNAv() {
  const router = useRouter();
  const linkArr = [
    {
      name: "Home",
      url: "/navigation",
    },
    {
      name: "linked page",
      url: "/navigation/linked",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-8 h-full">
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-2xl font-bold">Navigation with link</h2>
        {linkArr.map((item) => {
          return (
            <Link className="underline" href={item.url}>
              {item.name}
            </Link>
          );
        })}
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-2xl font-bold">Navigation with router</h2>
        {linkArr.map((item) => {
          return (
            <button
              className="bg-white rounded-lg p-1 text-black"
              onClick={() => router.push(item.url)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div>
        <h2 className="text-2xl font-bold">navigation with redirect</h2>
        <Link className="underline" href={`/navigation/people/${12}`}>
          Go to user
        </Link>
      </div>
    </div>
  );
}
export default NavNAv;
