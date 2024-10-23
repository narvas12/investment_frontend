import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import slide_image_1 from "../../../assets/images/img_1.jpg";
import slide_image_2 from "../../../assets/images/img_2.jpg";
import slide_image_3 from "../../../assets/images/img_3.jpg";
import slide_image_4 from "../../../assets/images/img_4.jpg";
import slide_image_5 from "../../../assets/images/img_5.jpg";
import slide_image_6 from "../../../assets/images/img_6.jpg";
import slide_image_7 from "../../../assets/images/img_7.jpg";

const FlowerGallery = () => {
  return (
    <div className="flower-gallery">
      {" "}
      {/* Add class for styling */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={10}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 10,
          modifier: 5,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="h-18 py-8 relative"
      >
        {[
          slide_image_1,
          slide_image_2,
          slide_image_3,
          slide_image_4,
          slide_image_5,
          slide_image_6,
          slide_image_7,
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Flower ${index + 1}`}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl max-h-96 rounded-3xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlowerGallery;
