export const navBarAnimation = {
  hidden: {
    height: 0,
    transition: {
      delay: 1.15,
    },
  },

  show: {
    height: "70vh",
  },
};

export const popUpParent = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  close: {
    transition: { staggerChildren: 0.07, staggerDirection: -1 },
  },
};

export const popUp = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  close: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const hamburgerTop = {
  close: {
    rotate: 0,
    translateY: 0,
    transition: {
      delay: 1.15,
    },
  },

  open: {
    rotate: 45,
    translateY: 5,
    transitinon: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const hamburgerButtom = {
  close: {
    rotate: 0,
    translateY: 0,
    transition: {
      delay: 1.15,
    },
  },

  open: {
    rotate: -45,
    translateY: -5,
    transitinon: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
