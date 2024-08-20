import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // useState: Example of a Hook --> You can identify hooks by the use keyword at the start.
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((curStep) => curStep - 1);
  }

  function handleNext() {
    if (step < 3) setStep((curStep) => curStep + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : null}>1</div>
            <div className={step >= 2 ? "active" : null}>2</div>
            <div className={step >= 3 ? "active" : null}>3</div>
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              bgColor="#7950f2"
              textColour="#fff"
              onClick={handlePrevious}
            >
              {/* Here instead of passing the text and emoji as extra props we use
              Children Props: This is anything in between a custom function
              element bracket */}

              <span>👈 Previous</span>
            </Button>
            <Button bgColor="#7950f2" textColour="#fff" onClick={handleNext}>
              {" "}
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColour, bgColor, onClick, children }) {
  return (
    <button
      style={{
        backgroundColor: bgColor,
        color: textColour,
      }}
      //Just put the name of the function. This will then return the value of the function when the event is triggered
      onClick={() => onClick()}
    >
      <span>{children}</span>
    </button>
  );
}
