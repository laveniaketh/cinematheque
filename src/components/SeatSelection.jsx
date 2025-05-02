import React, { useState, useEffect } from "react";
import availableSeat from "/avail-seat.png";
import selectedSeat from "/selected-seat.png";
import soldSeat from "/reserved-seat.png";
import Button from "./Button";
import LoadingSpinner from "./LoadingSpinner";

const SeatSelection = ({ movieDetails, initialSelectedSeats }) => {
  const rows = "ABCDEFGH".split("");
  const cols = 10;

  // State for sold seats, selected seats, and loading
  const [soldSeats, setSoldSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState(initialSelectedSeats);
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch reserved seats when the component loads
  useEffect(() => {
    const fetchReservedSeats = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/movies/reserved-seats/${movieDetails.movietitle}`
        );

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Failed to fetch reserved seats:", errorData.msg);
          return;
        }

        const data = await response.json();
        setSoldSeats(data.reservedSeats); // Set the reserved seats
      } catch (error) {
        console.error(
          "An error occurred while fetching reserved seats:",
          error
        );
      } finally {
        setLoading(false); // Stop loading once the fetch is complete
      }
    };

    fetchReservedSeats();
  }, [movieDetails.movietitle]);

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

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="flex flex-row items-center justify-evenly h-full">
      <div className="p-4 flex flex-col text-white gap-5">
        <div className="flex flex-row">
          {/* Movie Details Section */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold">{movieDetails.movietitle}</h2>
            <p className="text-lg">{movieDetails.timeslot}</p>
            <p className="text-lg font-semibold">200.00 PHP</p>
          </div>
        </div>
        <p className="text-white text-lg font-semibold">
          Selected Seats: {selectedSeats.join(", ") || "None"}
        </p>
        <div className="flex flex-row items-end justify-between">
          <Button text="Back" link="/select-movie" />
          <Button
            text="Next"
            link="/payment"
            state={{ movieDetails, selectedSeats }} // Pass movieDetails and selectedSeats in state
            disabled={selectedSeats.length === 0}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-evenly h-full">
        {/* Seat Selection Section */}
        <div className="text-white text-lg font-semibold flex justify-center items-center gap-5">
          <img src={selectedSeat} alt="" className="w-10 h-10" />
          <p>Selected</p>
          <img src={availableSeat} alt="" className="w-10 h-10" />
          <p>Available</p>
          <img src={soldSeat} alt="" className="w-10 h-10" />
          <p>Sold</p>
        </div>
        <div className="w-150 h-8 bg-[#171718] rounded-lg text-white text-lg font-bold flex items-center justify-center mb-4">
          Screen
        </div>
        <div className="grid grid-cols-10 gap-x-3">
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
