import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import ArtWork from "./pages/art-work";
import Gallery from "./pages/gallery";
import Profile from "./pages/profile";
import ApolloSearch from "./pages/ApolloSearch";
import Sign from "./pages/Sign";
import "./App.scss";

function App() {
  const location = useLocation();

  useLenis();

  return (
    <AnimatePresence>
      <Navigation />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/art-work/:id" element={<ArtWork />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign_" element={<Sign />} />
        <Route path="/apollo-search" element={<ApolloSearch />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
