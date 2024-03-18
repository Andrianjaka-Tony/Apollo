import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./style.module.scss";
import WrappedText from "../../wrapped-text";
import Item from "./item";
import { items } from "./items";
import { iconVariants, iconsVariants, sidebarCloseVariants } from "./anime";
import { Link } from "react-router-dom";

export default function Sidebar({ setSidebarOpen }) {
  const [imageIndex, setImageIndex] = useState(-1);
  const [isLogged, setLogged] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setLogged(true);
  }, []);

  const icons = [<FaTwitter />, <FaLinkedinIn />, <FaInstagram />, <FaFacebookF />, <FaGithub />];

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
      className={styles.sidebar}
    >
      <div className={styles["sidebar-items"]}>
        {items.map((item, index) => (
          <motion.div whileHover={() => setImageIndex(index)} onHoverEnd={() => setImageIndex(-1)} key={index}>
            <Item setSidebarOpen={setSidebarOpen} {...item} />
          </motion.div>
        ))}
      </div>
      <div className={styles["sidebar-image"]}>
        <AnimatePresence mode="wait">
          {imageIndex >= 0 && (
            <motion.img
              src={items[imageIndex].image}
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: `${Math.random() * 21 - 10}deg`,
                transition: {
                  ease: [0.34, 0.63, 0, 0.99],
                  duration: 1,
                },
              }}
              exit={{
                scale: 0,
                transition: {
                  duration: 0.4,
                  ease: [0.34, 0.63, 0, 0.99],
                },
              }}
            />
          )}
        </AnimatePresence>
      </div>
      <div className={styles["sidebar-top"]}>
        <h3 className={styles["sidebar-logo"]}>
          <WrappedText transition={[1]} text="Appolo" />
        </h3>
        <motion.span onClick={() => setSidebarOpen(false)} variants={sidebarCloseVariants} initial="initial" animate="animate" exit="exit" className={styles["sidebar-close"]}>
          <IoCloseSharp />
        </motion.span>
      </div>
      <div className={styles["sidebar-footer"]}>
        <motion.div variants={iconsVariants} initial="initial" animate="animate" exit="exit" className={styles["sidebar-icons"]}>
          {icons.map((icon, index) => (
            <motion.div variants={iconVariants} key={index}>
              {icon}
            </motion.div>
          ))}
        </motion.div>
        <div className={styles["sidebar-link"]}>
          <Link
            to={"/sign_"}
            onClick={() => {
              localStorage.removeItem("user");
              setSidebarOpen(false);
            }}
          >
            <WrappedText text={isLogged ? "Sign out" : "Sign in / up"} transition={[0.7]} />
          </Link>
        </div>
      </div>
    </motion.aside>
  );
}
