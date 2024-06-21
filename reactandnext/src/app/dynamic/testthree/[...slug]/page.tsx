function page({ params }: { params: { slug: string[] } }) {
  return (
    <div className="flex justify-center flex-col items-center h-screen w-full text-white text-4xl font-bold">
      {params.slug.map((item) => {
        return <p>hello {item}</p>;
      })}
    </div>
  );
}
export default page;
