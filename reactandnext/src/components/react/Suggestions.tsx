import useFetch from "@/hooks/useFetch";

function Suggestions({ query }: { query: string }) {
  const { data, error, loading } = useFetch("https://dummyjson.com/products");
  const filteredData = data?.filter((item) => item.title.includes(query));
  return (
    <ul className="h-[200px] overflow-hidden overflow-y-scroll bg-white">
      {filteredData?.map((item, idx) => {
        return (
          <li className="p-2 bg-white text-black mx-auto">{item.title}</li>
        );
      })}
    </ul>
  );
}
export default Suggestions;
