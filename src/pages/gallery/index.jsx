import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import Item from "../../components/for-you/item";
import { api } from "../../helpers/url";

export default function Gallery() {
  const [data, setData] = useState([]);
  const [hovered, setHovered] = useState({});

  useEffect(() => {
    fetch(`${api}/apollo/art/oeuvres`)
      .then((response) => response.json())
      .then(({ data }) => setData(data));
  }, []);

  const handleHover = (item) => {
    setHovered({
      author: item.auteur.nom,
      title: item.titre,
    });
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className={styles.container}>
      <div className={styles["items-container"]}>
        <motion.div className={styles.items}>
          {data.map((item, index) => (
            <Item whileHover={() => handleHover(item)} item={item} index={index} parallax={false} key={index} />
          ))}
        </motion.div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.email}>apollo@gmail.com</p>
        <div className={styles.detail}>
          <p className={styles.author}>{hovered.author}</p>
          <p className={styles.work}>{hovered.title}</p>
        </div>
        <h1 className={styles.title}>Gallery</h1>
      </div>
    </motion.div>
  );
}
