import React from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import { containerVariants, curtinVariants } from "./anime";

export default function WrappedText(props) {
  const { text, transition } = props;

  return (
    <motion.div custom={transition} variants={containerVariants} initial="initial" animate="animate" {...props} className={styles["curtain-container"]}>
      {Array.from(text).map((character, index) => (
        <motion.span key={index} data-classname="character" className={styles.character} data-space={character === " "} variants={curtinVariants}>
          {character}
        </motion.span>
      ))}
    </motion.div>
  );
}
