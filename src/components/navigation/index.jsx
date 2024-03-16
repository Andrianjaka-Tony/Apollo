import React from "react";
import { createPortal } from "react-dom";
import Navbar from "./navbar";

export default function Navigation() {
  return createPortal(
    <>
      <Navbar />
    </>,
    document.body
  );
}
