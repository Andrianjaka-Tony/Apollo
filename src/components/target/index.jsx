import React from "react";

import styles from "./style.module.scss";
import Paragraph from "./paragraph";

export default function Target() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Target</p>
      <Paragraph paragraph="Expand your artistic horizons and ignite your creativity with our platform. Let your imagination soar as you share and discover a world of captivating artworks. Together, let's paint a canvas of inspiration and cultural enrichment. Keep exploring, keep creating, keep inspiring!" />
    </div>
  );
}
