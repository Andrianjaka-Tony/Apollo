import { AnimatePresence } from "framer-motion";
import "./App.scss";
import useLenis from "./hooks/useLenis";
import Navigation from "./components/navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";

function App() {
  const location = useLocation();

  useLenis();

  return (
    <AnimatePresence>
      <Navigation />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
