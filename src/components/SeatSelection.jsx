import React, { useState } from "react";

// Import seat images
import availableSeat from "/avail-seat.png";
import selectedSeat from "/selected-seat.png";
import soldSeat from "/reserved-seat.png";
import Button from "./Button";

const SeatSelection = () => {
  // Generate seat labels (A1, A2, ..., H11)
  const rows = "ABCDEFGH".split("");
  const cols = 10;

  // Example of sold seats (random selection)
  const soldSeats = ["A3", "B5", "C7", "D2", "E10", "F8", "G4", "H11"];

  // State for selected seats
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (soldSeats.includes(seat)) return; // Prevent clicking on sold seats

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const getSeatImage = (seat) => {
    if (soldSeats.includes(seat)) return soldSeat;
    if (selectedSeats.includes(seat)) return selectedSeat;
    return availableSeat;
  };

  return (
    <div className="flex flex-row items-center justify-evenly h-full">
      <div className="w-1/3 p-4 flex flex-col text-white ">
        <div className=" flex flex-row ">
          {/* Movie Details Section */}
          <div className="w-40 h-50 rounded-lg mb-4 bg-[#171718]">
            <img
              src="/movie-poster.png"
              alt="Movie Poster"
              className="w-full h-auto rounded-lg mb-4"
            />
          </div>
          <div className="ml-4 flex flex-col">
            <h2 className="text-3xl font-bold">Movie Title</h2>
            <p className="text-lg">1:00 PM - 3:30 PM</p>
            <p className="text-lg">RATED 18</p>
            <p className="text-lg font-semibold">200.00 PHP</p>
          </div>
        </div>
        <p className=" text-white text-lg font-semibold">
          Selected Seats: {selectedSeats.join(", ") || "None"}
        </p>
        <div className="flex flex-row items-end justify-between ">
          <Button text="Back" link="/payment" />
          <Button text="Next" link="/payment" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-evenly h-full ">
        {/* Seat Selection Section */}
        <div className="text-white text-lg font-semibold flex justify-center items-center gap-5">
          <img src={selectedSeat} alt="" className="w-10 h-10" />
          <p>Selected</p>
          <img src={availableSeat} alt="" className="w-10 h-10" />
          <p>Available</p>
          <img src={soldSeat} alt="" className="w-10 h-10" />
          <p>Sold</p>
        </div>
        <div className="w-150 h-8 bg-[#171718] rounded-lg  text-white text-lg font-bold flex items-center justify-center mb-4">
          Screen
        </div>
        <div className="grid grid-cols-10 gap-x-3 ">
          {rows.flatMap((row) =>
            Array.from({ length: cols }, (_, i) => {
              const seat = `${row}${i + 1}`;
              return (
                <img
                  key={seat}
                  src={getSeatImage(seat)}
                  alt={`Seat ${seat}`}
                  className={`w-12 h-12 cursor-pointer ${
                    soldSeats.includes(seat) ? "opacity-50" : ""
                  }`}
                  onClick={() => toggleSeat(seat)}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
