import React from "react";
import SeatSelection from "../components/SeatSelection";

const SelectSeatPage = () => {
  return (
    <div className="px-5 py-5 max-w-7xl mx-auto flex flex-col relative z-10">
      <h1 className="text-6xl font-black leading-none tracking-tight text-gray-900 dark:text-white">
        <span className="text-gradient">Select</span> Your Seat
      </h1>
      <div className="rounded-lg shadow-lg shadow-[#2D2D2F] bg-[#242424] mt-4 mx-auto h-[525px] w-6xl">
        <SeatSelection />
      </div>
    </div>
  );
};

export default SelectSeatPage;
