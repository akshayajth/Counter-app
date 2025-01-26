import './App.css';
import React from "react";
import CounterDisplay from "./components/CounterDisplay";
import CounterControls from "./components/CounterControls";
import Input from "./components/Input";
import "./styles/CounterApp.css";

//Main file integrates all components
const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">Counter App</h1>
      <Counter />
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(1);

  
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



export default App;
