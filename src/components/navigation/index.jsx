import React, { useState } from "react";
import { createPortal } from "react-dom";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Navigation() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return createPortal(
    <>
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>,
    document.body
  );
}
