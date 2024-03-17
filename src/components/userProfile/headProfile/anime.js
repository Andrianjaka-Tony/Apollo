export const headeProfileVariants = {
  initial: {
    y: "2rem",
    opacity: 0,
  },
  animate: () => ({
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      duration: 1.5,
      ease: [0.34, 0.63, 0, 0.99],
    },
  }),
};
export const opacityVariants = {
  initial: {
    opacity: 0,
  },
  animate: () => ({
    opacity: 1,
  }),
};
