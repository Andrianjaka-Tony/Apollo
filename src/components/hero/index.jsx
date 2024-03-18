import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./style.module.scss";
import { imageVariants, titleVariants, wordVariants } from "./anime";

const Title = ({ title }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const words = title.split(" ");

  return (
    <motion.h1 style={{ y }} ref={ref} variants={titleVariants} initial="initial" animate="animate" exit="exit" className={styles.title}>
      {words.map((word, index) => (
        <motion.span className={styles.word} key={index}>
          <motion.span variants={wordVariants}>{word}</motion.span>
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Image = () => {
  return <motion.img variants={imageVariants} initial="initial" animate="animate" exit="exit" src="/images/1.jpg" alt="Hero image" className={styles.image} />;
};

export default function Hero() {
  return (
    <motion.div
      initial={{ background: "#111" }}
      animate={{ background: "#e4ddd4" }}
      transition={{
        duration: 0.4,
        delay: 2,
        ease: [0.34, 0.63, 0, 0.99],
      }}
      className={styles.hero}
    >
      <Title title="Discover, Share, and Create: Your Gateway to Artistic Inspiration and Cultural Connection on Apollo." />
      <div className={styles.details}>
        <p>2024</p>
        <p>Motion corporation</p>
      </div>
      <div className={styles["image-container"]}>
        <Image />
      </div>
    </motion.div>
  );
}
