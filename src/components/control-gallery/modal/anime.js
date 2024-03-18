export const modalVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      when: "afterChildren",
      duration: 0.3,
      staggerDirection: -1,
    },
  },
};

export const childrenVariants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 0.3,
    },
  },
};
