// import { useState } from "react";

// const messages = [
//   "Learn React ⚛️",
//   "Apply for jobs 💼",
//   "Invest your new income 🤑",
// ];

// export default function App() {
//   // useState: Example of a Hook --> You can identify hooks by the use keyword at the start.
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) setStep((curStep) => curStep - 1);
//   }

//   function handleNext() {
//     if (step < 3) setStep((curStep) => curStep + 1);
//   }

//   return (
//     <>
//       <button className="close" onClick={() => setIsOpen(!isOpen)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : null}>1</div>
//             <div className={step >= 2 ? "active" : null}>2</div>
//             <div className={step >= 3 ? "active" : null}>3</div>
//           </div>

//           <p className="message">
//             Step {step}: {messages[step - 1]}
//           </p>

//           <div className="buttons">
//             <button
//               style={{
//                 backgroundColor: "#7950f2",
//                 color: "#fff",
//               }}
//               //Just put the name of the function. This will then return the value of the function when the event is triggered
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{
//                 backgroundColor: "#7950f2",
//                 color: "#fff",
//               }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
