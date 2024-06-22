function layout({
  children,
  teamcopy,
  team,
}: // analytics,
{
  children: React.ReactNode;
  teamcopy: React.ReactNode;
  team: React.ReactNode;
  // analytics: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen w-full">
      {children}
      {team}
      {teamcopy}
      {/* {analytics} */}
    </div>
  );
}
export default layout;
