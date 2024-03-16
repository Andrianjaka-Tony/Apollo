export const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const curtinVariants = {
  initial: {
    y: "180%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.34, 0.63, 0, 0.99],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.34, 0.63, 0, 0.99],
    },
  },
};
