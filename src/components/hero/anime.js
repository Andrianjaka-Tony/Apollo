export const titleVariants = {
  initial: {
    color: "#e4ddd4",
    scale: 0.8,
  },
  animate: () => ({
    color: "#111",
    scale: 1,
    transition: {
      staggerChildren: 0.05,
      duration: 1.5,
      delay: 2,
      ease: [0.34, 0.63, 0, 0.99],
    },
  }),
  // exit: {
  //   transition: {
  //     staggerChildren: 0.05,
  //     staggerDirection: -1,
  //   },
  // },
};

export const wordVariants = {
  initial: {
    y: "280%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.4,
      ease: [0.34, 0.63, 0, 0.99],
    },
  },
  // exit: {
  //   y: "280%",
  //   transition: {
  //     duration: 0.8,
  //     ease: [0.34, 0.63, 0, 0.99],
  //   },
  // },
};

export const imageVariants = {
  initial: {
    width: "100px",
    height: "100px",
    y: "-50%",
    x: "-50%",
    marginLeft: "50%",
  },
  animate: {
    width: "100%",
    height: "fit-content",
    y: 0,
    x: 0,
    marginLeft: 0,
    transition: {
      duration: 1.5,
      delay: 2,
      ease: [0.34, 0.63, 0, 0.99],
    },
  },
};
