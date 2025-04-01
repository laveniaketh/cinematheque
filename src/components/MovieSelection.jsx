import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Controller } from "swiper/modules";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const movies = [
  {
    title: "In the Mood for Love",
    year: "2000",
    director: "Wong Kar-wai",
    plot: "In Hong Kong of 1962, Mrs. Chan and Mr. Chow, a journalist, move into neighbouring apartments on the same day. Their encounters are formal and polite—until a discovery about their respective spouses creates an intimate bond between them.",
    image: "/in the mood for love.png",
  },
  {
    title: "Happy Together",
    year: "1997",
    director: "Wong Kar-wai",
    plot: "A gay couple from Hong Kong takes a trip to Argentina in search of a new beginning but instead begins drifting even further apart.",
    image: "/happy together.jpg",
  },
  {
    title: "Fallen Angels",
    year: "1995",
    director: "Wong Kar-wai",
    plot: "An assassin goes through obstacles as he attempts to escape his violent lifestyle despite the opposition of his partner, who is secretly attracted to him.",
    image: "/fallen angels (3).jpg",
  },
];

const MovieSelection = ({ setSwiperInstance, swiperInstance }) => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-[#1E1E2F] to-[#2A2A3D]">
      <Swiper
        effect={"fade"}
        onSwiper={setSwiperInstance} // Store the Swiper instance
        controller={{ control: swiperInstance }} // Sync with PosterCarousel
        modules={[EffectFade, Controller]}
        className="w-full h-full"
      >
        {movies.map((movie, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center"
          >
            {/* Background Image */}
            <img src={movie.image} className="w-full h-full object-cover" />

            {/* Dark Fading Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[25rem] bg-gradient-to-t from-[#171718] via-[#171718]/90 " />

            {/* Movie Details */}
            <div className="absolute bottom-20 left-0 right-0 pl-20 text-white w-[55rem] ">
              <h2 className="text-7xl font-bold ">{movie.title}</h2>
              <p className="text-lg font-light mb-4 mt-1">
                {movie.year} • Directed by {movie.director}
              </p>
              <p className="text-md font-light mb-2">{movie.plot}</p>
              <p className="text-md font-semibold mb-2">
                200 PHP • 1:00 PM - 3:00 PM
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-10 left-16  z-1">
        <Button text="Back" link="/" />
      </div>
    </div>
  );
};

export default MovieSelection;
