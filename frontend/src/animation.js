export const popUpParent = {
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      when: "beforeChildren",
    },
  },
  close: {
    opacity: 0,
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export const popUp = {
  open: {
    y: 0,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  close: {
    y: 50,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const popUpParentLink = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 1.1,
      when: "beforeChildren",
    },
  },
  close: {
    transition: {
      staggerChildren: 0.07,
      staggerDirection: -1,
      delayChildren: 0.3,
      when: "afterChildren",
    },
  },
};

export const popUpLink = {
  open: {
    rotateZ: "0deg",
    y: 0,
    opacity: 0.5,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },

  close: {
    rotateZ: "10deg",
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
    width: 0,
    translateY: 0,
    transition: {
      delay: 1.15,
    },
  },

  animate: {
    width: "3rem",
    transition: {
      delay: 0.9,
      duration: 0.75,
      ease: "easeOut",
    },
  },

  open: {
    width: "3rem",
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
    width: 0,
    translateY: 0,
    transition: {
      delay: 1.15,
    },
  },

  animate: {
    width: "3rem",
    transition: {
      duration: 0.75,
      delay: 1.4,
      ease: "easeOut",
    },
  },

  open: {
    rotate: -45,
    translateY: -6,
    width: "3rem",
    transitinon: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const navItemAnimation = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },

  notHover: {
    opacity: 0.5,
    transitinon: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

const mouseMoveTracker = (mousePosition) => {
  return {
    x: mousePosition.x - 24,
    y: mousePosition.y - 24,
  };
};

export const cursorAnimation = (mousePosition) => {
  return {
    default: {
      ...mouseMoveTracker(mousePosition),
    },
    scaleUp: {
      ...mouseMoveTracker(mousePosition),
      scale: 1.5,
    },
    changeBackground: {
      ...mouseMoveTracker(mousePosition),
      scale: 1.5,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    scaleUpBlur: {
      ...mouseMoveTracker(mousePosition),
      scale: 1.5,
      backgroundColor: "rgba(255,255,255,0.2)",
      borderColor: "rgba(255,255,255,0)",
    },
  };
};

export const logoAnim = {
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.3,
      ease: "easeOut",
    },
  },

  hidden: {
    y: 50,
    opacity: 0,
  },
};

export const contactParent = {
  show: {
    transition: {
      staggerChildren: 0.6,
      delayChildren: 1,
      when: "beforeChildren",
    },
  },

  hidden: {
    transition: {
      staggerChildren: 0.6,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export const contactAnim = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },

  hidden: {
    x: -10,
    opacity: 0,
  },
};

export const showContent = {
  show: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      staggerChildren: 0.75,
    },
  },

  hidden: {
    opacity: 0,
  },
};

export const textAnimParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.5,
    },
  },
};

export const textAnim = {
  visible: {
    rotateY: "360deg",
  },
};

export const aboutMeBtn = {
  initial: {
    opacity: 0,
  },

  animate: {
    opacity: 1,
    scale: 40,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const titleAnim = {
  hidden: {
    y: 180,
  },

  show: {
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const introAnim = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const circle = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 20,
  },

  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 1,
      ease: "easeOut",
    },
  },
};
