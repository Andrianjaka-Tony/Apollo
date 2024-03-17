import React from "react";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Target from "../../components/target";
import ControlGallery from "../../components/control-gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Target />
      <ControlGallery />
      <Footer />
    </>
  );
}
