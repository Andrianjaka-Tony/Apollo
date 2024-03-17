import React from "react";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Target from "../../components/target";
import ControlGallery from "../../components/control-gallery";
import Tip from "../../components/tip";
import ForYou from "../../components/for-you";

export default function Home() {
  return (
    <>
      <Hero />
      <ForYou />
      <Tip />
      <Target />
      <ControlGallery />
      <Footer />
    </>
  );
}
