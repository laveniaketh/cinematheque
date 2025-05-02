import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SeatSelection from "../components/SeatSelection";
import LoadingSpinner from "../components/LoadingSpinner";

const SelectSeatPage = () => {
  const location = useLocation();
  const { movietitle, selectedSeats: initialSelectedSeats } =
    location.state || {}; // Retrieve movietitle and selectedSeats

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/api/movies/details/${movietitle}`
        );
        const data = await response.json();

        if (!response.ok) {
          console.error("Failed to fetch movie details:", data.msg);
          return;
        }

        setMovieDetails(data.movie); // Set movie details
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movietitle]);

  if (!movieDetails) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        {/* <LoadingSpinner /> */}
      </div>
    );
  }

  return (
    <div className="px-5 py-15 flex flex-col relative">
      <h1 className="text-6xl font-black leading-none tracking-tight text-gray-900 dark:text-white">
        <span className="text-gradient">Select</span> Your Seat
      </h1>
      <div className="rounded-lg shadow-lg shadow-[#2D2D2F] bg-[#242424] mt-4 mx-auto h-[570px] w-6xl">
        <SeatSelection
          movieDetails={movieDetails}
          initialSelectedSeats={initialSelectedSeats || []} // Pass initial selected seats
        />
      </div>
    </div>
  );
};

export default SelectSeatPage;
