import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { childrenVariants, modalVariants } from "./anime";

export default function Modal({ title, description, image, setIsModal }) {
  return (
    <motion.div variants={modalVariants} initial="initial" animate="animate" exit="exit" className={styles.modal}>
      <motion.div variants={childrenVariants} className={styles.section}>
        <div className={styles.title}>Title</div>
        <div className={styles.text}>Hello, this is my first website</div>
      </motion.div>
      <div className={styles.separator}></div>
      <motion.div variants={childrenVariants} className={styles.section}>
        <div className={styles.title}>Description</div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus nihil laborum. Rem optio tempora officiis nesciunt sit itaque, molestias officia, eum aliquam illum aliquid?
          Architecto magni ab facilis quisquam nihil atque, laboriosam illum necessitatibus! Repudiandae dolorem aut tempore nihil.
        </div>
      </motion.div>
      <div className={styles.separator}></div>
      <motion.div variants={childrenVariants} className={styles.section}>
        <div className={styles.title}>Image</div>
        <div className={styles.text}>
          <img src={image} className={styles.image} alt="" />
        </div>
      </motion.div>
      <div className={styles.close}>
        <IoMdClose className={styles.icon} onClick={() => setIsModal(false)} />
      </div>
    </motion.div>
  );
}
