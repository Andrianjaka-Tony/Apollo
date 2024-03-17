import React, { useState } from "react";
import FormSignIn from "./FormSignIn/FormSignIn";
import FormSignUp from "./FormSignUp/FormSignUp";
import { AnimatePresence, motion } from "framer-motion";
import "./Login.sass";

const swapVariants = {
  initial: {
    y: "100%",
    opacity: 0,
    transition: {
      ease: [0.34, 0.63, 0, 0.99],
      duration: 0.5,
    },
  },
  animate: {
    y: "0%",
    opacity: 1,
    transition: {
      ease: [0.34, 0.63, 0, 0.99],
      duration: 0.5,
    },
  },
  exit: {
    y: "-100%",
    opacity: 0,
    transition: {
      ease: [0.34, 0.63, 0, 0.99],
      duration: 0.5,
    },
  },
};

const Login = () => {
  const [showSignIn, setShowSignIn] = useState(true);

  return (
    <div id="login_container">
      <AnimatePresence mode="wait">
        {showSignIn ? (
          <motion.div variants={swapVariants} initial="initial" animate="animate" exit={"exit"}>
            <FormSignIn
              go={() => {
                setShowSignIn(false);
              }}
            />
          </motion.div>
        ) : (
          <motion.div variants={swapVariants} initial="initial" animate="animate" exit={"exit"}>
            <FormSignUp
              go={() => {
                setShowSignIn(true);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
