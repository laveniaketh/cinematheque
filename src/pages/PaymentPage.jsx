import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { movieDetails, selectedSeats } = location.state || {}; // Retrieve state or fallback to undefined

  const baseURL = "http://localhost:8000"; // Base URL for images
  const seatPrice = 200; // Price per seat
  const total = selectedSeats?.length * seatPrice || 0; // Calculate total payment

  if (!movieDetails || !selectedSeats) {
    // Redirect back to seat selection if state is missing
    console.error("Missing movie details or selected seats!");
    navigate("/select-seat");
    return null;
  }

  const handleConfirm = async () => {
    try {
      // Step 1: Fetch the movie ID using the movie title
      console.log("Fetching movie ID...");
      const movieResponse = await fetch(
        `http://localhost:8000/api/movies/id/${movieDetails.movietitle}`
      );

      if (!movieResponse.ok) {
        const movieError = await movieResponse.json();
        console.error("Failed to fetch movie ID:", movieError.msg);
        alert("Failed to fetch movie ID. Please try again.");
        return;
      }

      const movieData = await movieResponse.json();
      const movieID = movieData.movieID; // Get the movie ID from the response
      console.log("Movie ID fetched:", movieID);

      // Step 2: Create the ticket, reserve seats, and record payment
      console.log("Creating ticket...");
      const response = await fetch("http://localhost:8000/api/tickets/buy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          movieID, // Use the fetched movie ID
          seatNumbers: selectedSeats, // Seats selected by the user
          paymentAmount: total, // Total payment amount
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Failed to confirm ticket:", errorData.msg);
        alert("Failed to confirm ticket. Please try again.");
        return;
      }

      const data = await response.json();
      console.log("Ticket confirmed:", data);

      // Step 3: Navigate to the confirmation page
      navigate("/confirmation");
    } catch (error) {
      console.error("An error occurred while confirming the ticket:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <h1 className="text-6xl font-black leading-none tracking-tight text-gray-900 dark:text-white">
        <span className="text-gradient">Payment</span> Details
      </h1>
      <div className="rounded-lg shadow-lg shadow-[#2D2D2F] bg-[#242424] mt-4 mx-auto h-[525px] w-6xl">
        <div className="flex flex-row justify-evenly items-center h-full p-5">
          {/* Movie Poster Section */}
          <div className="w-80 h-90 rounded-lg bg-[#171718] shadow-[#2D2D2F] shadow-md">
            <div className="flex flex-row items-center justify-center h-full p-5">
              {/* Yellow Film Strips */}
              <div className="flex flex-col gap-2 mr-4">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="w-6.5 h-6.5 bg-yellow-400 rounded-sm"
                  ></div>
                ))}
              </div>
              {/* Poster Image */}
              <img
                src={`${baseURL}${movieDetails.posterPath}`} // Use base URL and poster path
                alt="Movie Poster"
                className="w-full h-full object-cover rounded-md"
              />
              {/* Yellow Film Strips */}
              <div className="flex flex-col gap-2 ml-4">
                {[...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    className="w-6.5 h-6.5 bg-yellow-400 rounded-sm"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Details Section */}
          <div className="flex flex-col text-white w-xl h-xl p-5 border-2 border-[#2D2D2F] rounded-lg bg-[#171718] shadow-[#2D2D2F] shadow-md">
            <div className="flex flex-col">
              <h2 className="text-3xl font-bold">{movieDetails.movietitle}</h2>
              <p className="text-lg">{movieDetails.timeslot}</p>
              <p className="text-lg">Seat(s): {selectedSeats.join(", ")}</p>
            </div>

            <h2 className="text-3xl font-bold">Payment</h2>
            <br />
            <div className="flex flex-row justify-between">
              <p className="text-lg">{selectedSeats.join(", ")}</p>
              <p className="text-lg">x {selectedSeats.length}</p>
            </div>
            <div className="w-full border-t-2 rounded-full border-gray-300 my-4 border" />
            <div className="flex flex-row justify-between">
              <h2 className="text-xl font-bold">Total</h2>
              <h2 className="text-xl font-bold">₱ {total}</h2>
            </div>
            <div className="flex flex-row items-end justify-between mt-4">
              <Button
                text="Back"
                link="/select-seat"
                state={{ movietitle: movieDetails.movietitle, selectedSeats }} // Pass movietitle and selectedSeats
              />
              <Button
                text="Confirm"
                // link="/confirmation"
                onClick={handleConfirm}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
