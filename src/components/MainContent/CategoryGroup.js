import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import styles from "../../styles/CategoryGroup.module.css";
import "../../styles/categorySwipper.css";
import { useEffect } from "react";

const CategoryGroup = () => {
  const { courseList } = useSelector((state) => state.courses);

  // Category
  const uniqCategory = [];
  courseList.filter((course) => {
    if (!uniqCategory.includes(course.category.name)) {
      uniqCategory.push(course.category.name);
    }
  });

  return (
    <div className={styles["category-group"]}>
      {uniqCategory.map((category) => {
        return (
          <a href="#" className={styles["group-link"]}>
            {category}
          </a>
        );
      })}
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
        {uniqCategory.map((category) => {
          return (
            <SwiperSlide>
              <a href="#" className="group-link">
                {category}
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategoryGroup;
