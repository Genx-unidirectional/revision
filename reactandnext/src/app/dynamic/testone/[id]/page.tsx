function page({ params }: { params: { id: string } }) {
  return (
    <div className="h-screen text-white font-bold   w-full flex justify-center items-center">
      This is user {params.id}
    </div>
  );
}
export default page;
