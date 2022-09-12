import React, { useContext } from "react";
import { MyContext } from "./Context";
const Search = () => {
  const { query, searchPost } = useContext(MyContext);

  return (
    <>
      <input
        type="search"
        placeholder="Search News"
        value={query}
        onChange={(e) => searchPost(e.target.value)}
        style={{ margin: "auto", display: "flex",padding:"0.5rem",width:"25rem",  outline:"none" }}
      />
    </>
  );
};

export default Search;
