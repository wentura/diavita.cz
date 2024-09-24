"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./carouselGallery.css";
import { data } from "/components/data.js";
export default function CarouselGallery({ productId, kategorieId }) {
  // const kategorie = data[kategorieId];
  const product = data[kategorieId].products[productId];

  return (
    <Swiper
      cssMode={true}
      navigation={true}
      loop={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination]}
      className="swiper-product"
    >
      {product.image.map((image, index) => {
        return (
          <SwiperSlide key={image}>
            <img
              src={product.image[index]}
              alt={product.title}
              className="max-h-96 md:max-h-[600px] object-cover object-center pt-4 mx-auto"
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
