import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

import styles from "./style.module.scss";
import { images } from "./data";
import Image from "./image";
import { imageVariants } from "./anime";
import { lenisObject } from "../../hooks/useLenis";
import Modal from "./modal";

export default function ControlGallery() {
  const l = lenisObject;

  const ref = useRef(null);
  const draggableRef = useRef(null);

  const [reveal, setReveal] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modal, setModal] = useState({});

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-80, 40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -80]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setReveal(false);
      setIsModal(false);
      if (draggableRef.current) {
        draggableRef.current.style.transform = "translateX(0) translateY(0)";
      }
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
          top: (-window.innerHeight * 2) / 3,
          left: -window.innerWidth / 2,
          bottom: (window.innerHeight * 2) / 3,
          right: window.innerWidth / 2,
        }}
        dragMomentum={0.1}
        id="draggable"
        className={styles.draggable}
        ref={draggableRef}
      >
        {images.map(({ image, width, x, y, scale }, index) => (
          <Image
            onClick={() => {
              setIsModal(true);
              setModal({ image });
            }}
            variants={imageVariants}
            custom={[Math.random() * 0.5 + 0.5, x, y, scale]}
            src={image}
            width={width}
            key={index}
          />
        ))}
        <motion.div animate={{ opacity: reveal ? 1 : 0 }} className={styles.advice}>
          Drag to move
        </motion.div>
      </motion.div>
      <motion.div animate={{ opacity: reveal ? 0 : 1 }} className={styles.title + " " + styles.left}>
        <motion.p style={{ y: y1 }}>Next</motion.p>
      </motion.div>
      <motion.div animate={{ opacity: reveal ? 0 : 1 }} className={styles.title + " " + styles.right}>
        <motion.p style={{ y: y2 }}>Events</motion.p>
      </motion.div>
      <AnimatePresence mode="wait">{isModal && <Modal {...modal} setIsModal={setIsModal} />}</AnimatePresence>
    </motion.div>
  );
}
