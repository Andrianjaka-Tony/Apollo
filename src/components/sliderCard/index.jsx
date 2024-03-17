import React from "react";
import styles from "./style.module.sass";
import { motion } from "framer-motion";
import ArtworkCard from "./artworkCard";
import { SliderVariants } from "./anime";
import usePositionCursor from "./hooks/usePositionCursor";

const SliderCard = ({ contents = [] }) => {
  const { x, y } = usePositionCursor();
  return (
    <>
      <motion.div className={styles.contentContainer} variants={SliderVariants} initial="initial" animate="animate" exit="exit">
        {contents.map((k, key) => (
          <ArtworkCard key={key} index={key} x={x} y={y} />
        ))}
      </motion.div>
    </>
  );
};

export default SliderCard;
