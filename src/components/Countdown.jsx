import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [counter, setCounter] = useState(5); // Initial countdown value
  const [finished, setFinished] = useState(false); // State to check if countdown is finished

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev === 1) {
          clearInterval(interval); // Stop countdown
          setFinished(true); // Show new text
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {finished ? (
        <p className="text-2xl font-semibold text-white  px-50">
          Proceed to facilitator for payment. Thank you and come again!
        </p>
      ) : (
        <>
          <p className="text-xl font-semibold text-white  px-50">
            Generating your ticket... Please wait.
          </p>
          <span className="countdown text-6xl text-white font-bold flex items-center justify-center">
            <span
              style={{ "--value": counter }}
              aria-live="polite"
              aria-label={counter.toString()} // Accessibility
            >
              {counter}
            </span>
          </span>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
