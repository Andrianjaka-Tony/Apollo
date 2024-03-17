// [0.34, 0.63, 0, 0.99]
export const imageVariants = {
  initial: {
    y: "-50%",
    x: "-50%",
    transition: {
      duration: 1.5,
      ease: [0.34, 0.63, 0, 0.99],
    },
  },
  reveal: ([delay, x, y]) => {
    return {
      x,
      y,
      transition: {
        duration: 1.5,
        ease: [0.34, 0.63, 0, 0.99],
        delay: delay / 2,
      },
    };
  },
};
