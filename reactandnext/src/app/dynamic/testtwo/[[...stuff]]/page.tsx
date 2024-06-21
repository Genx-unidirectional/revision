function page({ params }: { params: { stuff?: string[] } }) {
  return (
    <div className="flex justify-center items-center h-screen w-full text-white text-4xl font-bold">
      {params.stuff === undefined
        ? "this is page without slug"
        : `welcome ${params.stuff}`}
    </div>
  );
}
export default page;
