import React from "react";

import { HiMiniBars2 } from "react-icons/hi2";

import styles from "./style.module.scss";
import WrappedText from "../../wrapped-text";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <h3 className={styles["nav-logo"]}>
        <WrappedText text="Appolo" />
      </h3>
      <span className={styles["nav-burger"]}>
        <HiMiniBars2 />
      </span>
    </nav>
  );
}
