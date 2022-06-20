import React from "react";
import Search from "./Search";

function Header({ search, handleSearchChange, handleSubmit }) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} handleSearchChange={handleSearchChange} handleSubmit={handleSubmit} />
    </header>
  );
}

export default Header;
