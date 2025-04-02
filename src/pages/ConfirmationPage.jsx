// import Countdown from "daisyui/components/countdown";
import React from "react";
import CountdownTimer from "../components/Countdown";
import Button from "../components/Button";

const ConfirmationPage = () => {
  return (
    <div className="px-5 pt-30 flex flex-col relative z-10">
      <div className="flex flex-row items-center justify-center h-full px-20 py-1">
        <img
          src="./ticket.svg"
          alt="Ticket Banner"
          className="w-full max-w-md h-auto object-contain mx-auto drop-shadow-md"
        />
        <h1 className="text-2xl font-black leading-none tracking-tight text-gray-900 md:text-5xl lg:text-8xl text-start dark:text-white">
          <span className="text-gradient">Booked</span> Successfully
        </h1>
      </div>
      <div className="mt-20 text-center flex flex-col items-center justify-center h-full">
        <CountdownTimer />
        <Button text="Back to Home" link="/" />
      </div>
    </div>
  );
};

export default ConfirmationPage;
