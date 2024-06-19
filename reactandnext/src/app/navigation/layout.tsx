import NavNAv from "@/components/navigation/NavNAv";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid grid-cols-12">
      <div className="col-span-3">
        <NavNAv />
      </div>
      <div className="col-span-9 bg-white">{children}</div>
    </div>
  );
}
export default layout;
