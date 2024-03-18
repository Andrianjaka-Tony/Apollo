import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Image(props) {
  return <motion.img draggable={false} className={styles.image} {...props} />;
}
