import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Controller } from "swiper/modules";
import { Link } from "react-router-dom";

const PosterCarousel = ({ movies, setSwiperInstance, swiperInstance }) => {
  const baseURL = "http://localhost:8000"; // Base URL for the backend

  return (
    <div className="w-[30rem] px-6 py-10 mx-auto">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.8,
        }}
        onSwiper={setSwiperInstance}
        controller={{ control: swiperInstance }}
        modules={[EffectCoverflow, Controller]}
        className="h-[18rem]"
      >
        {movies.map((movie, index) => (
          <SwiperSlide
            key={index}
            className="!w-[12rem] !h-[18rem] flex justify-center items-center"
          >
            <Link
              to="/select-seat"
              state={{ movietitle: movie.movietitle }} // Pass movietitle as state
            >
              <img
                src={`${baseURL}${movie.posterPath}`} // Prepend base URL
                alt={movie.movietitle}
                className="w-[12rem] h-[18rem] rounded-md object-cover border-4 border-white shadow-md shadow-[#2D2D2F]"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PosterCarousel;
