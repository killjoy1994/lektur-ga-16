import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import styles from "../../styles/CategoryGroup.module.css";

const CategoryGroup = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {});

  return (
    // <div className={styles["category-group"]}>
    //   <a href="#">BUSINESS</a>
    //   <a href="#">TECHNOLOGY</a>
    //   <a href="#">GRAPHIC DESIGN</a>
    //   <a href="#">BUSINESS</a>
    //   <a href="#">BUSINESS</a>
    //   <a href="#">TECHNOLOGY</a>
    //   <a href="#">GRAPHIC DESIGN</a>
    //   <a href="#">BUSINESS</a>
    //   <a href="#">TECHNOLOGY</a>
    //   <a href="#">BUSINESS</a>
    //   <a href="#">TECHNOLOGY</a>
    //   <a href="#">GRAPHIC DESIGN</a>
    // </div>
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <a href="#">BUSINESS</a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">TECHNOLOGY</a>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default CategoryGroup;
