import React, { useState } from "react";
import MovieSelection from "../components/MovieSelection";
import PosterCarousel from "../components/PosterCarousel";
import Button from "../components/Button";

const SelectMoviePage = () => {
  const [movieSwiper, setMovieSwiper] = useState(null);
  const [posterSwiper, setPosterSwiper] = useState(null);

  return (
    <div className="relative">
      {/* Pass the Swiper instances separately */}
      <MovieSelection
        setSwiperInstance={setMovieSwiper}
        swiperInstance={posterSwiper}
      />
      <div className="absolute bottom-0 right-4">
        <PosterCarousel
          setSwiperInstance={setPosterSwiper}
          swiperInstance={movieSwiper}
        />
      </div>
      {/* <div className="absolute bottom-15 left-7  z-1">
        <Button text="Back" link="/confirmation" />
      </div> */}
    </div>
  );
};

export default SelectMoviePage;
