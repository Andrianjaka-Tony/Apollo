import React from "react";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import WrappedText from "../../../wrapped-text";

const transition = { duration: 1, ease: [0.34, 0.63, 0, 0.99] };

export default function Item({ name, to, setSidebarOpen }) {
  return (
    <NavLink onClick={() => setSidebarOpen(false)} to={to} className={styles.item}>
      <motion.div transition={transition} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8 } }}>
        <GoArrowUpRight className={styles["icon"]} />
      </motion.div>
      <span className={styles.name}>
        <WrappedText text={name} transition={[0.4]} />
      </span>
    </NavLink>
  );
}
