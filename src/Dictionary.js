import { useState } from "react";

function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form onSubmit={search} onChange={handleKeywordChange}>
        <input type="search" />
      </form>
    </div>
  );
}

export default Dictionary;
