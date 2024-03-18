import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import styles from "./style.module.scss";
// import { items } from "./data";
import Item from "./item";
import { api } from "../../helpers/url";

export default function ForYou() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${api}/validation/recommandation/4`)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <motion.div className={styles.container}>
      <h2 className={styles.title}>For you</h2>
      <h3 className={styles.text}>We have selected some works for you.</h3>
      <motion.div className={styles.items}>
        {data.map((item, index) => (
          <Item item={item} index={index} key={index} />
        ))}
      </motion.div>
    </motion.div>
  );
}
