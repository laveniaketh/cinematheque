import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Controller } from "swiper/modules";
import { Link } from "react-router-dom";

const PosterCarousel = ({ setSwiperInstance, swiperInstance }) => {
  return (
    <div className="w-[30rem] px-6 py-10 mx-auto">
      {" "}
      {/* Increased width & padding */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150, // Increased depth for a better 3D effect
          modifier: 2.8, // Adjusted modifier for a smoother look
        }}
        onSwiper={setSwiperInstance} // Store the Swiper instance
        controller={{ control: swiperInstance }} // Sync with MovieSelection
        modules={[EffectCoverflow, Controller]}
        className="h-[18rem]" // Increased height
      >
        <SwiperSlide className="!w-[12rem] !h-[18rem] flex justify-center items-center">
          <Link to="/payment">
            <img
              src="/in the mood for love poster.jpg"
              alt="slide_image"
              className="w-[12rem] h-[18rem] rounded-md object-cover border-4 border-white shadow-md shadow-[#2D2D2F]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="!w-[12rem] !h-[18rem] flex justify-center items-center">
          <Link to="/payment">
            <img
              src="/happy together poster.jpg"
              alt="slide_image"
              className="w-[12rem] h-[18rem] rounded-md object-cover border-4 border-white shadow-md shadow-[#2D2D2F]"
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide className="!w-[12rem] !h-[18rem] flex justify-center items-center">
          <Link to="/payment">
            <img
              src="/fallen angels poster.jpg"
              alt="slide_image"
              className="w-[12rem] h-[18rem] rounded-md object-cover border-4 border-white shadow-md shadow-[#2D2D2F]"
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PosterCarousel;
