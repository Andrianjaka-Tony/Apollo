import React, { useEffect, useState } from "react";
import styles from "./style.module.sass";
import WrappedText from "../../wrapped-text";
import { AnimatePresence } from "framer-motion";
import SliderCard from "../../sliderCard";
import { alaivoGet } from "../../../utils/Alaivo";

const sections = [
  {
    label: "Oeuvres",
    path: "apollo/art/oeuvres/user",
  },
];

const AboutProfile = () => {
  const [sectionActive, setSectionActive] = useState(sections[0]);
  const [showSection, setShowSection] = useState(false);
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : undefined;
  const { getOeuvres, oeuvres, loading } = useGetData(sections[0]);
  useEffect(() => {
    setTimeout(() => {
      setShowSection(true);
    }, 50);
  }, [sectionActive]);
  return (
    <>
      <div className={styles.aboutProfileContainer}>
        <div className={styles.upperAbout} />
        <div className={styles.left}>
          <AnimatePresence mode="wait">
            <div className={styles.sectionName}>{showSection && <WrappedText text={sectionActive.label} />}</div>
          </AnimatePresence>
        </div>
        <div className={styles.right}>
          <div className={styles.topSections}>
            {sections.map((section, index) => {
              return (
                <div
                  key={index + 500}
                  className={`${sectionActive.path === section.path ? styles.activeSection : styles.section} ${styles.sectionBlank}`}
                  onClick={() => {
                    if (sectionActive.path !== section.path) setShowSection(false);
                    setSectionActive(section);
                    getOeuvres(section.path);
                  }}
                >
                  {section.label}
                </div>
              );
            })}
          </div>
          <SliderCard contents={oeuvres} loading={loading} />
        </div>
      </div>
    </>
  );
};

const useGetData = (section) => {
  const [oeuvres, setOeuvres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOeuvres(section.path);
  }, []);

  const getOeuvres = async (path) => {
    setLoading(true);
    let res = await alaivoGet(path, null, false);
    setLoading(false);
    setOeuvres(res.data);
  };
  return { oeuvres, getOeuvres, loading };
};

export default AboutProfile;
