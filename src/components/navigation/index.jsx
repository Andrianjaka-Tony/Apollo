import React, { useState } from "react";
import { createPortal } from "react-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return createPortal(
    <>
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <AnimatePresence mode="wait">
        {isSidebarOpen && <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />}
      </AnimatePresence>
    </>,
    document.body
  );
}
