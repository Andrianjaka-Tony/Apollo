import React, { useState } from "react";
import WrappedText from "../wrapped-text";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import CardSearch from "./CardSearch";
import { listVariants } from "./anime";
import { useNavigate } from "react-router-dom";
import "./style.sass";

const SearchApollo = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  return (
    <>
      <div className="container_search_">
        <div className="title">
          <WrappedText text="Search" />
        </div>
        <SearchBar setData={setArtworks} setLoading={setLoading} />
      </div>
      <motion.div className="list_result" variants={listVariants} initial="initial" animate="animate" exit={"exit"}>
        {loading
          ? [...Array(10).keys()].map((k, index) => <CardSearch {...k} key={index} loading={loading} icon={<GoArrowUpRight className="go_to_icon" />} />)
          : artworks.map((artwork, index) => (
              <CardSearch
                {...artwork}
                key={index}
                loading={loading}
                icon={<GoArrowUpRight className="go_to_icon" />}
                onClick={() => {
                  nav(`/gallery/art-work/${artwork.id}#title`);
                }}
              />
            ))}
      </motion.div>
    </>
  );
};

export default SearchApollo;
