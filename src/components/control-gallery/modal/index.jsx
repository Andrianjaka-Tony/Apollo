import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { childrenVariants, modalVariants } from "./anime";
// import { api } from "../../../helpers/url";

export default function Modal({ title, description, image, setIsModal }) {
  return (
    <motion.div variants={modalVariants} initial="initial" animate="animate" exit="exit" className={styles.modal}>
      <motion.div variants={childrenVariants} className={styles.section}>
        <div className={styles.title}>Title</div>
        <div className={styles.text}>{title}</div>
      </motion.div>
      <div className={styles.separator}></div>
      <motion.div variants={childrenVariants} className={styles.section}>
        <div className={styles.title}>Description</div>
        <div className={styles.text}>{description}</div>
      </motion.div>
      {/* <div className={styles.separator}></div> */}
      {/* <motion.div variants={childrenVariants} className={styles.section}>
        <div className={styles.title}>Image</div>
        <div className={styles.text}><img src={`${api}/${image}`} className={styles.image} alt="" /></div>
      </motion.div> */}
      <div className={styles.close}>
        <IoMdClose className={styles.icon} onClick={() => setIsModal(false)} />
      </div>
    </motion.div>
  );
}
