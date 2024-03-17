import React, { useRef, useState } from "react";
import styles from "./style.module.scss";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Item({ item, index }) {
  const navigate = useNavigate();

  const ref = useRef(null);

  const [click, setClick] = useState(false);
  const [rect, setRect] = useState({});

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [Math.random() * -100, Math.random() * 100]);

  const isInView = useInView(ref, { once: true });

  const handleClick = (event) => {
    const { top, left, width, height } = event.target.getBoundingClientRect();
    setRect({ top: top + "px", left: left + "px", width: width + "px", height: height + "px" });
    setClick(true);
  };

  const change = () => {
    navigate("/art-work/" + parseInt(index + 1) + "#title");
  };

  return (
    <>
      <motion.div style={{ y }} onClick={handleClick} ref={ref} data-key={index} className={styles.item}>
        <div className={styles.image}>
          <img src={item.image} alt={item.image} />
          <motion.div initial={{ scaleY: 0 }} animate={{ scaleY: isInView ? 0 : 1 }} transition={{ delay: 0.4, duration: 1.2, ease: [0.34, 0.63, 0, 0.99] }} className={styles.curtain}></motion.div>
        </div>
      </motion.div>
      {click && (
        <motion.div
          initial={{ top: rect.top, left: rect.left, width: rect.width, height: rect.height }}
          animate={{ top: "2vw", left: "2vw", width: "calc(100vw - 4vw)", height: "auto" }}
          transition={{ duration: 0.8, ease: [0.34, 0.63, 0, 0.99] }}
          className={styles.transition}
          onAnimationComplete={change}
        >
          <img src={item.image} alt={item.image} />
        </motion.div>
      )}
    </>
  );
}
