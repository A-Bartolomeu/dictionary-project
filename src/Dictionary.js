import { useState } from "react";

function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <input
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-5/6 rounded-full bg-blue-50 px-4 py-2 text-sm transition-all duration-300 placeholder:text-slate-300 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
        />
      </form>
    </div>
  );
}

export default Dictionary;
