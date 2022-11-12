export const navBarAnimation = {
  hidden: {
    height: 0,
    transition: {
      delay: 1,
    },
  },

  show: {
    height: "75vh",
  },
};

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
      delay: 0.2,
      ease: "easeOut",
    },
  },

  open: {
    rotate: -45,
    translateY: -5,
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
      border: 0,
      mixBlendMode: "difference",
    },
    socialLinks: {
      ...mouseMoveTracker(mousePosition),
      scale: 1.5,
      backgroundColor: "rgba(255,255,255,0.2)",
      border: 0,
    },
  };
};
