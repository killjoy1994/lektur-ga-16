import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import styles from "../../styles/Cards.module.css";

const Cards = ({ courseList }) => {
  return (
    <div className={styles.cards}>
      {courseList.map((course) => {
        return (
          <Link to={"/detail/" + course.id} key={course.id}>
            <Card
              src={course.image}
              title={course.title}
              author={course.by.fullName}
              videos={"15"}
              materials={"4"}
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
