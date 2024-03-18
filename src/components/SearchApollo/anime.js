export const listVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      staggerChildren: 0.11,
      delayChildren: 1.5,
    },
  },
};

export const itemVariants = {
  initial: {
    y: 30,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
  },
};
