import React, { useState } from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";
import { useParams } from "react-router-dom";
import WrappedText from "../../components/wrapped-text";
import { api } from "../../helpers/url";

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

  const artWork = {
    name: "Joconde",
    date: "1995",
    author: "John Doe",
  };

  return (
    <>
      <div className={styles.container}>
        <h1 id="title" className={styles.title}>
          {loaded && <WrappedText text={data.titre} transition={[1.4]} />}
        </h1>
        <h1 id="date" className={styles.date}>
          {loaded && <WrappedText text={`(${data.datecreation})`} transition={[1.45]} />}
        </h1>
        {loaded && (
          <motion.div layoutId="image" transition={{ duration: 0.8, ease: [0.34, 0.63, 0, 0.99] }} className={styles.image}>
            <img src={`${api}/${data.photo[0]}`} alt={"Hello world"} />
          </motion.div>
        )}
      </div>
      {!isComplete && loaded && (
        <motion.div layoutId="image" transition={{ duration: 1.2, ease: [0.34, 0.63, 0, 0.99] }} className={styles["fixed-image"]}>
          <img src={`${api}/${data.photo[0]}`} alt={"Hello world"} />
        </motion.div>
      )}
    </>
  );
}
