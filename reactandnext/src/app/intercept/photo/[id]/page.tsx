function page({ params }: { params: { id: string } }) {
  return <div>This is {params.id}</div>;
}
export default page;
