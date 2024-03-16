import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./style.module.scss";

export default function Item({ name, to }) {
  return (
    <NavLink to={to} className={styles.item}>
      <motion.span className={styles.name}>{name}</motion.span>
    </NavLink>
  );
}
