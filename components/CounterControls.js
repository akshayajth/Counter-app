import React from "react";
import { motion } from "framer-motion";

const CounterControls = ({ increment, decrement, reset }) => {
  return (
    <div className="counter-controls">
      <motion.button
        className="btn increment"
        onClick={increment}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Increment
      </motion.button>
      <motion.button
        className="btn decrement"
        onClick={decrement}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Decrement
      </motion.button>
      <motion.button
        className="btn reset"
        onClick={reset}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Reset
      </motion.button>
    </div>
  );
};

export default CounterControls;
