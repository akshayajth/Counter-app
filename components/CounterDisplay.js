import React from "react";
import { motion } from "framer-motion";

const CounterDisplay = ({ count }) => {
  return (
    <motion.div
      className="counter-display"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Count: {count}</h2>
    </motion.div>
  );
};

export default CounterDisplay;
