import { AnimatePresence } from "framer-motion";
import "./App.scss";
import useLenis from "./hooks/useLenis";
import Navigation from "./components/navigation";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  useLenis();

  return (
    <AnimatePresence>
      <Navigation />
      <Routes key={location.pathname} location={location}>
        <Route path="/" />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
