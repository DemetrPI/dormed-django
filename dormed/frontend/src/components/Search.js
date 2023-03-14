import React, { useState } from "react";
import "../../static/css/search.css";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Search;
