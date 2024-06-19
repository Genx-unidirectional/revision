import { redirect } from "next/navigation";

async function Profile({ params }: { params: { id: string } }) {
  const team = await fetchUser(params.id);
  if (!team) {
    redirect("/navigation");
  }
  return <div>Profile</div>;
}
export default Profile;
async function fetchUser(id: string) {
  const res = await fetch(`https://example.com/user/${id}`);
  if (!res.ok) return undefined;
  return res.json();
}
