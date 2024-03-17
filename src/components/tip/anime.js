export const titleVariants = {
  initial: {},
  animate: () => ({
    transition: {
      staggerChildren: 0.005,
      duration: 1.5,
      delayChildren: 0.1,
    },
  }),
};

export const wordVariants = {
  initial: {
    y: "280%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: [0.34, 0.63, 0, 0.99],
    },
  },
};
