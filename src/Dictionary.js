import axios from "axios";
import { useState } from "react";
import Results from "./ui/Results";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center px-5"
      >
        <input
          placeholder="Search any word"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full rounded-full bg-blue-50 px-5 py-2 text-sm transition-all duration-300 placeholder:text-slate-300 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
        />
      </form>
      <Results results={results} />
    </div>
  );
}

export default Dictionary;
