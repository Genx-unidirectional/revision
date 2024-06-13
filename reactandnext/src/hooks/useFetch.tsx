import { useEffect, useState } from "react";
import { SearchAutoSchema, SearchType } from "@/types/react";
function useFetch(url: string) {
  const [data, setData] = useState<SearchType>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const result = await fetch(url);
    if (!result.ok) {
      setError(true);
      setLoading(false);
    }
    const data = await result.json();
    SearchAutoSchema.parse(data.products);
    setData(data.products);
  };
  useEffect(() => {
    let ignore = false;
    if (!ignore) {
      fetchData();
      setLoading(false);
    }
    return () => {
      ignore = true;
    };
  }, []);
  return { data, error, loading };
}
export default useFetch;
