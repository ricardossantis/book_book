import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
