import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { CardVariants } from "../anime";
import { URL } from "../../../utils/Alaivo";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.sass";

const ArtworkCard = ({ index = 0, x = 0, y = 0, titre = "", auteur = "", photo = [], id = -1 }) => {
  const nav = useNavigate();
  const [showCursor, setShowCursor] = useState(false);
  const position = {
    left: x + 20 + "px",
    top: y - 20 + "px",
  };
  const onCursor = () => {
    setShowCursor(true);
  };
  const hideCursor = () => {
    setShowCursor(false);
  };

  return (
    <>
      <motion.div
        className={styles.content}
        variants={CardVariants}
        onMouseEnter={onCursor}
        onMouseLeave={hideCursor}
        onClick={() => {
          nav(`/gallery/art-work/${id}#title`);
        }}
      >
        <AnimatePresence mode="">
          {showCursor && (
            <motion.div
              className={styles.cursorHelp}
              initial={{
                ...position,
                opacity: 0,
                scale: 0.2,
              }}
              animate={{
                ...position,
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.11,
                },
              }}
              exit={{
                ...position,
                opacity: 0,
                scale: 0,
                transition: { duration: 0.2 },
              }}
            >
              <div className={styles.square}></div>
              {titre + " - " + auteur.nom}
            </motion.div>
          )}
        </AnimatePresence>

        <div className={styles.picture}>
          <img src={URL + photo} alt="" />
        </div>
      </motion.div>
    </>
  );
};

export default ArtworkCard;
