import React from "react";

import { motion } from "framer-motion";
import ControlGallery from "../../components/control-gallery";
import Footer from "../../components/footer";

export default function Exposition() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <ControlGallery />
      <Footer />
    </motion.div>
  );
}
