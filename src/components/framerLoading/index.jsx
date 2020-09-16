import React from "react";
import { motion } from "framer-motion";

const FramerLoading = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  );
};

export default FramerLoading;

const loadingContainer = {
  width: "5rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "1.25rem",
  height: "1.25rem",
  backgroundColor: "black",
  borderRadius: "0.25rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
};
