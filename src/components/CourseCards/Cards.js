import React from "react";
import { Link } from "react-router-dom";

import Card from "./Card";
import styles from "../../styles/Cards.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCoursesAction } from "../../redux/actions/Homepage";

const Cards = () => {
  const { homepageCourses, isLoading, error } = useSelector((state) => state.homepage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch]);

  return (
    <div className={styles.cards}>
      {isLoading && !error ? (
        <p>Loading</p>
      ) : (
        homepageCourses.map((course) => {
          return (
            <Link to="/detail">
              <Card
                src={course.image}
                title={course.title}
                author={course.by.fullName}
                videos={"15"}
                materials={"4"}
                description={course.description}
                category={course.category.name}
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
