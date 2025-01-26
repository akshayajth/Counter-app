import React, { useState, useEffect } from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import Input from "./components/Input";
import "./styles/CounterApp.css";

const Counter = () => {
  const [count, setCount] = useState(() => {
    // Retrieve count from localStorage or set to 0
    return Number(localStorage.getItem("count")) || 0;
  });
  const [step, setStep] = useState(() => {
    // Retrieve step from localStorage or set to 1
    return Number(localStorage.getItem("step")) || 1;
  });

  useEffect(() => {
    // Save count and step to localStorage whenever they change
    localStorage.setItem("count", count);
    localStorage.setItem("step", step);
  }, [count, step]);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(0);
  const handleStepChange = (value) => setStep(Number(value));

  return (
    <div className="counter-container">
      <CounterDisplay count={count} />
      <CounterControls
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      <Input step={step} onStepChange={handleStepChange} />
    </div>
  );
};

export default Counter;
