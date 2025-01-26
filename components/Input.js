import React from "react";
//Handles user input for the step value


const Input = ({ step, onStepChange }) => {
  const handleChange = (event) => {
    onStepChange(event.target.value);
  };

  return (
    <div className="step-input">
      <label htmlFor="step">Step Value:</label>
      <input
        id="step"
        type="number"
        value={step}
        onChange={handleChange}
        className="input-step"
      />
    </div>
  );
};

export default Input;
