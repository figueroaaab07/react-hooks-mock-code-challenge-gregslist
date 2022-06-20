import React from "react";

function Search({ search, handleSearchChange, handleSubmit }) {

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}
//       <input type="text" name="search" placeholder="Search..." onChange={onSearchChange} value={search}/>

export default Search;
