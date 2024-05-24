import React from "react";
import "./SearchBar.css";

import { useState } from "react";

import { LuSearch } from "react-icons/lu";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="searchBar">
      <div className="searchBar-icon">
        <LuSearch />
      </div>
      <input
        type="text"
        placeholder={isFocused ? "" : "Search Projects"}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`searchBar-textField ${isFocused ? "focused" : ""}`}
      />
    </div>
  );
};

export default SearchBar;
