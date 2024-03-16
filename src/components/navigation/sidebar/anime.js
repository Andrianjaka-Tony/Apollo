export const iconsVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
};

export const iconVariants = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.34, 0.63, 0, 0.99],
    },
  },
  exit: {
    opacity: 0,
  },
};

export const sidebarCloseVariants = {
  initial: {
    scale: 0,
    borderRadius: "50%",
  },
  animate: {
    scale: 1,
    borderRadius: "0",
    transition: {
      duration: 0.7,
      ease: [0.34, 0.63, 0, 0.99],
      delay: 0.4,
    },
  },
  exit: {
    scale: 0,
    borderRadius: "50%",
    transition: {
      duration: 0.7,
      ease: [0.34, 0.63, 0, 0.99],
    },
  },
};
