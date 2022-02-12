import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import styles from "../../styles/CategoryGroup.module.css";
import "../../styles/categorySwipper.css";

const CategoryGroup = () => {
  const [width, setWidth] = useState(window.innerWidth);

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
