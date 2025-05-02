import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieSelection from "../components/MovieSelection";
import PosterCarousel from "../components/PosterCarousel";
import { Spinner } from "flowbite-react";
import LoadingSpinner from "../components/LoadingSpinner";

const SelectMoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [movieSwiper, setMovieSwiper] = useState(null);
  const [posterSwiper, setPosterSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/movies/titles");
        const data = await response.json();

        if (!response.ok) {
          console.error("Failed to fetch movie titles:", data.msg);
          return;
        }

        const titles = data.titles;

        const movieDetails = await Promise.all(
          titles.map(async (title) => {
            const detailsResponse = await fetch(
              `http://localhost:8000/api/movies/details/${title}`
            );
            const detailsData = await detailsResponse.json();

            if (!detailsResponse.ok) {
              console.error(
                `Failed to fetch details for movie: ${title}`,
                detailsData.msg
              );
              return null;
            }

            return detailsData.movie;
          })
        );

        setMovies(movieDetails.filter((movie) => movie !== null));
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieSelect = (movie) => {
    navigate("/select-seat", { state: { movie } });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <div className="text-center">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen bg-gray-900 text-white">
      <MovieSelection
        movies={movies}
        setSwiperInstance={setMovieSwiper}
        swiperInstance={posterSwiper}
        onMovieSelect={handleMovieSelect}
      />
      <div className="absolute bottom-0 right-4">
        <PosterCarousel
          movies={movies}
          setSwiperInstance={setPosterSwiper}
          swiperInstance={movieSwiper}
          onMovieSelect={handleMovieSelect}
        />
      </div>
    </div>
  );
};

export default SelectMoviePage;
