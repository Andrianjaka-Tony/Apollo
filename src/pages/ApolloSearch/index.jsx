import React from "react";
import SearchApollo from "../../components/SearchApollo";
import { motion } from "framer-motion";

import "./style.sass";

const ApolloSearch = () => {
  return (
    <motion.div
      className="container_page_"
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <SearchApollo />
    </motion.div>
  );
};

export default ApolloSearch;
