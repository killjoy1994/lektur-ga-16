import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import styles from "../../styles/Cards.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCoursesAction } from "../../redux/actions/Courses/getCoursesAction";

const Cards = () => {
  const { courseList, isLoading, error } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch]);

  return (
    <div className={styles.cards}>
      {isLoading && !error ? (
        <p>Loading</p>
      ) : (
        courseList.map((course) => {
          return (
            <Link to="/detail" key={course.id}>
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
        })
      )}
      {error && <p>Maaf ada kesalahan</p>}
    </div>
  );
};

export default Cards;
