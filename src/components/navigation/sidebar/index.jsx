import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import WrappedText from "../../wrapped-text";
import Item from "./item";
import { items } from "./items";
import { iconVariants, iconsVariants, sidebarCloseVariants } from "./anime";

export default function Sidebar() {
  const icons = [<FaTwitter />, <FaLinkedinIn />, <FaInstagram />, <FaFacebookF />, <FaGithub />];

  return (
    <motion.aside
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.4,
      }}
      className={styles.sidebar}
    >
      <div className={styles["sidebar-top"]}>
        <h3 className={styles["sidebar-logo"]}>
          <WrappedText transition={[1]} text="Appolo" />
        </h3>
        <motion.span variants={sidebarCloseVariants} initial="initial" animate="animate" exit="exit" className={styles["sidebar-close"]}>
          <IoCloseSharp />
        </motion.span>
      </div>
      <div className={styles["sidebar-items"]}>
        {items.map((item, index) => (
          <Item {...item} key={index} />
        ))}
      </div>
      <div className={styles["sidebar-footer"]}>
        <motion.div variants={iconsVariants} initial="initial" animate="animate" exit="exit" className={styles["sidebar-icons"]}>
          {icons.map((icon, index) => (
            <motion.div variants={iconVariants} key={index}>
              {icon}
            </motion.div>
          ))}
        </motion.div>
        <div className={styles["sidebar-email"]}>
          <WrappedText text="apollo@gmail.com" transition={[0.7]} />
        </div>
      </div>
    </motion.aside>
  );
}
