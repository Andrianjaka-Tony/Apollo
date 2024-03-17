import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./style.module.scss";
import { images } from "./data";
import Image from "./image";
import { imageVariants } from "./anime";
import { lenisObject } from "../../hooks/useLenis";

export default function ControlGallery() {
  const l = lenisObject;

  const ref = useRef(null);
  const draggableRef = useRef(null);

  const [reveal, setReveal] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-80, 40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -80]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setReveal(false);
    });
  }, []);

  const handleClick = () => {
    l.scrollTo(ref.current, {
      onComplete: () => {
        setReveal(true);
      },
    });
  };

  return (
    <motion.div ref={ref} onClick={handleClick} initial="initial" animate={reveal ? "reveal" : "initial"} className={styles.gallery}>
      <motion.div
        drag
        dragConstraints={{
          top: -window.innerHeight / 2,
          left: -window.innerWidth / 2,
          bottom: window.innerHeight / 2,
          right: window.innerWidth / 2,
        }}
        dragMomentum={0.1}
        className={styles.draggable}
        ref={draggableRef}
      >
        {images.map(({ image, width, x, y, scale }, index) => (
          <Image variants={imageVariants} custom={[Math.random() * 0.5 + 0.5, x, y, scale]} src={image} width={width} key={index} />
        ))}
      </motion.div>
      <motion.div animate={{ opacity: reveal ? 0 : 1 }} className={styles.title + " " + styles.left}>
        <motion.p style={{ y: y1 }}>Hello</motion.p>
      </motion.div>
      <motion.div animate={{ opacity: reveal ? 0 : 1 }} className={styles.title + " " + styles.right}>
        <motion.p style={{ y: y2 }}>World</motion.p>
      </motion.div>
    </motion.div>
  );
}
