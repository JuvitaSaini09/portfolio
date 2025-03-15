"use client";
import { motion } from "framer-motion";

const AnimatedLines = () => {
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
    }),
  };

  return (
    <svg width="200" height="100" viewBox="0 0 200 100">
      {[0, 1, 2].map((i) => (
        <motion.line
          key={i}
          x1="10"
          y1={30 + i * 20}
          x2="190"
          y2={30 + i * 20}
          stroke="black"
          strokeWidth="2"
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          custom={i}
        />
      ))}
    </svg>
  );
};

export default AnimatedLines;
