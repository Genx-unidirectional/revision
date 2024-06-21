function page({ params }: { params: { category: string; id: string } }) {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-full text-white text-4xl font-bold">
      hello user {params.id} from {params.category}
    </div>
  );
}
export default page;
