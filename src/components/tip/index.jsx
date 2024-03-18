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
  const [winner, setWinner] = useState({});

  useEffect(() => {
    fetch(`${api}/validation/week`)
      .then((response) => response.json())
      .then((response) => {
        setWinner(response);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Art of the week</h2>
      <motion.img className={styles.image} src={`http://192.168.88.21:8080/${winner.photo}`} alt="Art of the week" />
      <h2 className={styles.title}>Tip of the day</h2>
      <div className={styles.data}>
        <p className={styles["tip-title"]}>Title</p>
        <Text className={styles["tip-content"]} text="March 14th 1879, Einstein was born." />
      </div>
      <div className={styles.data}>
        <p className={styles["tip-title"]}>Description</p>
        <Text
          className={styles["tip-content"]}
          text="Son père, Hermann Einstein, né le 30 août 1847 à Buchau, est mort le 10 octobre 1902 à Milan. Il est entrepreneur (Elektrotechnische Fabrik J. Einstein & Cie)1 et épouse Pauline Koch
          (1858-1920) le 8 août 1876. Trois ans plus tard, le 14 mars 1879N 3, Albert Einstein, leur premier enfant, naît dans leur appartement à Ulm en Allemagne. L'année suivante, la famille
          s'installe à Munich. Les Einstein sont des juifs non pratiquants, mais un parent enseigne à Albert les éléments du judaïsme. Il a vers onze ans une phase très religieuse : il ne mange pas de
          porc et compose des chants religieux qu'il chante sur le chemin de l'école. « Mais je lus mes premiers livres de science, et j'en terminai avec la foi d'Abraham. »2 Il ne fait pas sa
          bar-mitsvah et n'apprend pas l'hébreu."
        />
      </div>
    </div>
  );
}
