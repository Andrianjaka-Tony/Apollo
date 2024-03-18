import React from "react";

import { HiMiniBars2 } from "react-icons/hi2";

import styles from "./style.module.scss";
import WrappedText from "../../wrapped-text";

export default function Navbar({ setSidebarOpen }) {
  return (
    <nav className={styles.nav}>
      <h3 className={styles["nav-logo"]}>
        <WrappedText text="Apollo" />
      </h3>
      <span onClick={() => setSidebarOpen(true)} className={styles["nav-burger"]}>
        <HiMiniBars2 />
      </span>
    </nav>
  );
}
