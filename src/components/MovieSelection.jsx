import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Controller } from "swiper/modules";

const MovieSelection = ({ movies, setSwiperInstance, swiperInstance }) => {
  const baseURL = "http://localhost:8000"; // Base URL for the backend

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-[#1E1E2F] to-[#2A2A3D]">
      <Swiper
        effect={"fade"}
        onSwiper={setSwiperInstance}
        controller={{ control: swiperInstance }}
        modules={[EffectFade, Controller]}
        className="w-full h-full bg-[#171718]"
      >
        {movies.map((movie, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center"
          >
            {/* Background Image */}
            <img
              src={`${baseURL}${movie.previewPath}`} // Prepend base URL
              alt={movie.movietitle}
              className="w-full h-full object-cover transition-all duration-200 ease-in-out"
            />

            {/* Dark Fading Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[25rem] bg-gradient-to-t from-[#171718] via-[#171718]/90 " />

            {/* Movie Details */}
            <div className="absolute bottom-20 left-0 right-0 pl-20 text-white w-[55rem] ">
              <h2 className="text-7xl font-bold ">{movie.movietitle}</h2>
              <p className="text-lg font-light mb-4 mt-1">
                {movie.releasedYear} • Directed by {movie.director}
              </p>
              <p className="text-md font-light mb-2">{movie.summary}</p>
              <p className="text-xl font-semibold mb-2">
                ₱200.00 • {movie.timeslot}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSelection;
