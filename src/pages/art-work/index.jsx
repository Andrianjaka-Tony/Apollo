import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import { useParams } from "react-router-dom";
import WrappedText from "../../components/wrapped-text";

export default function ArtWork() {
  const { id } = useParams();

  const [isComplete, setComplete] = useState(false);

  useState(() => {
    const timeOut = setTimeout(() => {
      setComplete(true);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  const artWork = {
    name: "Joconde",
    date: "1995",
    author: "John Doe",
  };

  return (
    <>
      <div className={styles.container}>
        <h1 id="title" className={styles.title}>
          <WrappedText text="Joconde" transition={[1.4]} />
        </h1>
        <h1 className={styles.date}>
          <WrappedText text={`(${artWork.date})`} transition={[1.45]} />
        </h1>
        {isComplete && (
          <motion.div layoutId="image" transition={{ duration: 0.8, ease: [0.34, 0.63, 0, 0.99] }} className={styles.image}>
            <img src={`/suggestion/${id}.webp`} alt={"Hello world"} />
          </motion.div>
        )}
      </div>
      {!isComplete && (
        <motion.div layoutId="image" transition={{ duration: 1.2, ease: [0.34, 0.63, 0, 0.99] }} className={styles["fixed-image"]}>
          <img src={`/suggestion/${id}.webp`} alt={"Hello world"} />
        </motion.div>
      )}
    </>
  );
}
