import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import { useParams } from "react-router-dom";
import WrappedText from "../../components/wrapped-text";
import { api } from "../../helpers/url";
import Footer from "../../components/footer";

export default function ArtWork() {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isComplete, setComplete] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useState(() => {
    let timer = null;
    const get = () => {
      fetch(`${api}/apollo/art/oeuvres/${id}`)
        .then((response) => response.json())
        .then(({ data }) => {
          setData(data);
          console.log(data);
          setLoaded(true);
          timer = setTimeout(() => {
            setComplete(true);
          }, 1000);
        });
    };

    get();

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className={styles.container}>
        <h1 id="title" className={styles.title}>
          {loaded && <WrappedText text={data.titre} transition={[1.4]} />}
        </h1>
        <h1 id="date" className={styles.date}>
          {loaded && <WrappedText text={`(${data.datecreation})`} transition={[1.45]} />}
        </h1>
        <div className={styles.separator}></div>
        <div className={styles.infos}>
          <div>{loaded && data.auteur.nom}</div>
          <div>{loaded && data.categorie.nom}</div>
          <div>{loaded && data.provenance.nom}</div>
        </div>
        <div className={styles.section}>
          <p className={styles.label}>Description</p>
          <p className={styles.value}>
            {loaded && data.description}
            {/* <br />
            <br />
            {loaded && data.descriptionIA} */}
          </p>
        </div>
        {loaded && (
          <motion.div layoutId="image" transition={{ duration: 0.8, ease: [0.34, 0.63, 0, 0.99] }} className={styles.image}>
            <img src={`${api}/${data.photo[0]}`} alt={"Hello world"} />
          </motion.div>
        )}
        {loaded && data.photo.map((photo, index) => (index !== 0 ? <motion.img key={index} className={styles["other-image"]} src={`${api}/${photo}`} /> : <></>))}
      </div>
      {!isComplete && loaded && (
        <motion.div layoutId="image" transition={{ duration: 1.2, ease: [0.34, 0.63, 0, 0.99] }} className={styles["fixed-image"]}>
          <img src={`${api}/${data.photo[0]}`} alt={"Hello world"} />
        </motion.div>
      )}
      <Footer />
    </motion.div>
  );
}
