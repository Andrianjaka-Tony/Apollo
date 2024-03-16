import React from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import { items } from "../navigation/sidebar/items";
import Item from "./item";

export default function Footer() {
  const icons = [<FaTwitter />, <FaLinkedinIn />, <FaInstagram />, <FaFacebookF />, <FaGithub />];

  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.items}>
          {items.map((item, index) => (
            <Item {...item} key={index} />
          ))}
          <motion.div initial="initial" animate="animate" exit="exit" className={styles.icons}>
            {icons.map((icon, index) => (
              <motion.div key={index}>{icon}</motion.div>
            ))}
          </motion.div>
          <div className={styles.separator}></div>
        </div>
        <div className={styles.contact}>
          <p className={styles.text}>Sign up for our newsletter to receive updates and content.</p>
          <p className={styles.newsletter}>Newsletter</p>
          <input type="text" placeholder="Enter your email" className={styles.input} />
        </div>
      </div>
    </div>
  );
}
