import React, { useState } from "react";
import styles from "./style.module.sass";
import { IoAddOutline } from "react-icons/io5";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal";
import FormAddArtwork from "./FormAddArtwork";

const ArtworkAdd = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={styles.ArtworkAddContainer}>
      <div className={styles.buttonAdd} onClick={handleModal}>
        <div className={styles.text}> NEW ARTWORK </div>
        <div className={styles.icon}>
          <IoAddOutline />
        </div>
      </div>
      <AnimatePresence>
        {showModal && (
          <Modal>
            <FormAddArtwork closer={handleModal} />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArtworkAdd;
