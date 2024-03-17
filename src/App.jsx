import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import useLenis from "./hooks/useLenis";
import Navigation from "./components/navigation";
import Home from "./pages/home";
import Profile from "./pages/profile";
import "./App.scss";

function App() {
  const location = useLocation();

  useLenis();

  return (
    <AnimatePresence>
      <Navigation />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
