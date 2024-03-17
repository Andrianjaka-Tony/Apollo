export const SliderVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 1,
    },
  }),
};
export const CardVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: () => ({
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  }),
};
