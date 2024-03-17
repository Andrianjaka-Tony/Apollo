import React from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import { imageVariants, titleVariants, wordVariants } from "./anime";

const Title = ({ title }) => {
  const words = title.split(" ");

  return (
    <motion.h1 variants={titleVariants} initial="initial" animate="animate" exit="exit" className={styles.title}>
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

// Expand your artistic horizons and ignite your creativity with our platform. Let your imagination soar as you share and discover a world of captivating artworks. Together, let's paint a canvas of inspiration and cultural enrichment. Keep exploring, keep creating, keep inspiring!

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
