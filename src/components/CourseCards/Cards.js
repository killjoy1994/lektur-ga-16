import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import styles from "../../styles/Cards.module.css";

const Cards = ({ courseList }) => {
  return (
    <div className={styles.cards}>
      {courseList.map((course) => {
        let videosCount = 0;
        course.contents.forEach((content) => {
          return videosCount++;
        });

        let materialsCount = 0;
        course.contents.forEach((material) => {
          return (materialsCount += material.materials.length);
        });

        return (
          <Link to={"/detail/" + course.id} key={course.id}>
            <Card
              src={course.image}
              title={course.title}
              author={course.by.fullName}
              videos={videosCount}
              materials={materialsCount}
              description={course.description}
              category={course.category.name}
              id={course.id}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
