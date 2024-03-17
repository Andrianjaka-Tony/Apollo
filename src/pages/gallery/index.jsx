import React from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import { items } from "../../components/for-you/data";
import Item from "../../components/for-you/item";

export default function Gallery() {
  return (
    <div className={styles.container}>
      <div className={styles["items-container"]}>
        <motion.div className={styles.items}>
          {items.map((item, index) => (
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
