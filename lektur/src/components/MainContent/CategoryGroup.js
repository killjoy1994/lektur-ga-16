import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import styles from "../../styles/CategoryGroup.module.css";

const CategoryGroup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <div className={styles["category-group"]}>
      {/* <a href="#">BUSINESS</a>
      <a href="#">TECHNOLOGY</a>
      <a href="#">GRAPHIC DESIGN</a>
      <a href="#">BUSINESS</a>
      <a href="#">BUSINESS</a>
      <a href="#">TECHNOLOGY</a>
      <a href="#">GRAPHIC DESIGN</a>
      <a href="#">BUSINESS</a>
      <a href="#">TECHNOLOGY</a>
      <a href="#">BUSINESS</a>
      <a href="#">TECHNOLOGY</a>
      <a href="#">GRAPHIC DESIGN</a> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <a href="#">BUSINESS</a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">TECHNOLOGY</a>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryGroup;
