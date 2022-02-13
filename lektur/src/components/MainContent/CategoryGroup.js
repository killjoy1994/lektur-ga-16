import React, { useRef, useState } from "react";
// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
<<<<<<< HEAD
// import "swiper/css";
// import "swiper/css/navigation";
// import required modules
// import { Navigation } from "swiper";
=======
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
>>>>>>> 2a9fedeceebaf81ff0a14bc15da26a5fb8f0d46d

import styles from "../../styles/CategoryGroup.module.css";
import "../../styles/categorySwipper.css";

const CategoryGroup = () => {
  return (
    <div className={styles["category-group"]}>
      <a href="#" className={styles["group-link"]}>
        BUSINESS
      </a>
      <a href="#" className={styles["group-link"]}>
        TECHNOLOGY
      </a>
      <a href="#" className={styles["group-link"]}>
        GRAPHIC DESIGN
      </a>
      <a href="#" className={styles["group-link"]}>
        BUSINESS
      </a>
      <a href="#" className={styles["group-link"]}>
        BUSINESS
      </a>
      <a href="#" className={styles["group-link"]}>
        TECHNOLOGY
      </a>
      <a href="#" className={styles["group-link"]}>
        GRAPHIC DESIGN
      </a>
      <a href="#" className={styles["group-link"]}>
        BUSINESS
      </a>
      <a href="#" className={styles["group-link"]}>
        TECHNOLOGY
      </a>
      <a href="#" className={styles["group-link"]}>
        BUSINESS
      </a>
      <a href="#" className={styles["group-link"]}>
        TECHNOLOGY
      </a>
      <a href="#" className={styles["group-link"]}>
        GRAPHIC DESIGN
      </a>
      <Swiper
        slidesPerView={2}
        speed={500}
        spaceBetween={15}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="#" className="group-link">
            BUSINESS
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="group-link">
            TECHNOLOGY
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="group-link">
            GRAPHIC DESIGN
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="group-link">
            BUSINESS
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="group-link">
            TECHNOLOGY
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="group-link">
            TECHNOLOGY
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="group-link">
            GRAPHIC DESIGN
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="group-link">
            TECHNOLOGY
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="group-link">
            TECHNOLOGY
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryGroup;
