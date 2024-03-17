import React, { useEffect, useState } from "react";
import styles from "./style.module.sass";
import WrappedText from "../../wrapped-text";
import { AnimatePresence } from "framer-motion";
import SliderCard from "../../sliderCard";

const sections = [
  {
    label: "Expositions",
    path: "expo",
    content: 12,
  },
  {
    label: "Shares",
    path: "sahre",
    content: 1,
  },
  {
    label: "Favs",
    path: "ssa",
    content: 22,
  },
];

const AboutProfile = () => {
  const [sectionActive, setSectionActive] = useState(sections[0]);
  const [showSection, setShowSection] = useState(false);
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
                  }}
                >
                  {section.label}
                </div>
              );
            })}
          </div>
          <SliderCard contents={[...Array(sectionActive.content).keys()]} />
        </div>
      </div>
    </>
  );
};

export default AboutProfile;
