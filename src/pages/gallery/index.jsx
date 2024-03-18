import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import Item from "../../components/for-you/item";
import { api } from "../../helpers/url";

export default function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${api}/apollo/art/oeuvres`)
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["items-container"]}>
        <motion.div className={styles.items}>
          {data.map((item, index) => (
            <Item item={item} index={index} parallax={false} key={index} />
          ))}
        </motion.div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.email}>apollo@gmail.com</p>
        <h1 className={styles.title}>Gallery</h1>
      </div>
    </div>
  );
}
