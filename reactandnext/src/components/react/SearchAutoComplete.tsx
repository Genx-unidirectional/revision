import debounce from "debounce";
import { useState, lazy, Suspense } from "react";
import Suggestions from "./Suggestions";
function SearchAutoComplete() {
  const [query, setQuery] = useState<string>("");
  const handleChange = debounce((str: string) => {
    setQuery(str);
  }, 300);
  return (
    <div>
      <input
        type="text"
        className="text-black"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Suspense>
        <Suggestions query={query} />
      </Suspense>
    </div>
  );
}
export default SearchAutoComplete;
