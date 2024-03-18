import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import styles from "./style.module.scss";
import { titleVariants, wordVariants } from "./anime";
import { api } from "../../helpers/url";

const Text = (props) => {
  const { text } = props;
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <motion.p ref={ref} {...props} variants={titleVariants} initial="initial" animate={isInView ? "animate" : ""}>
      {words.map((word, index) => (
        <motion.span className={styles.word} key={index}>
          <motion.span variants={wordVariants}>{word}</motion.span>
        </motion.span>
      ))}
    </motion.p>
  );
};

export default function Tip() {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  const [winner, setWinner] = useState({});
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`${api}/validation/week`)
      .then((response) => response.json())
      .then((response) => {
        setWinner(response);
      });
  }, []);

  useEffect(() => {
    fetch(`${api}/chat/bot/desc`)
      .then((response) => response.text())
      .then((response) => setText(response));
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Art of the week</h2>
      <motion.div ref={ref} className={styles["image-container"]}>
        <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: isInView ? 0 : 1 }} transition={{ delay: 0.4, duration: 1.2, ease: [0.34, 0.63, 0, 0.99] }} className={styles.curtain}></motion.div>
        <motion.img className={styles.image} src={`${api}/${winner.photo}`} alt="Art of the week" />
      </motion.div>
      <h2 className={styles.title}>Tip of the day</h2>
      <div className={styles.data}>
        <Text className={styles["tip-content"]} text={text} />
      </div>
    </div>
  );
}
