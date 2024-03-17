import { AnimatePresence } from "framer-motion";
import "./App.scss";
import { useLenis } from "./hooks/useLenis";
import Navigation from "./components/navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import ArtWork from "./pages/art-work";
import Gallery from "./pages/gallery";

function App() {
  const location = useLocation();

  useLenis();

  return (
    <AnimatePresence mode="wait">
      <Navigation />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/art-work/:id" element={<ArtWork />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
