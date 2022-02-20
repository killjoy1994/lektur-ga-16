import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Card from "../../components/CourseCards/Card";

import styles from "../../styles/Cards.module.css";

export default function SearchList() {
  const { searchCourses } = useSelector((state) => state.searchCourses);

  return (
    <div className={styles.cards}>
      {searchCourses.map((course, index) => {
          console.log(course);
        return (
          <Link to={"/detail/" + course.id} key={index}>
            <Card
              src={course.image}
              title={course.title}
              author={course.by.fullName}
              videos={course.contents.length}
              materials={course.contents.length.materials}
              description={course.description}
              category={course.category.name}
              id={course.id}
            />
          </Link>
        );
      })}
    </div>
  )
}
