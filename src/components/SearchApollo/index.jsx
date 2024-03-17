import React, { useState } from "react";
import WrappedText from "../wrapped-text";
import SearchBar from "./SearchBar";
import "./style.sass";

const SearchApollo = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="container_search_">
        <div className="title">
          <WrappedText text="Search" />
        </div>
        <SearchBar />
      </div>
      <div className="list_result">
        {[...Array(12).keys()].map((k) => (
          <div className="item skeleton" key={k}></div>
        ))}
      </div>
    </>
  );
};

export default SearchApollo;
