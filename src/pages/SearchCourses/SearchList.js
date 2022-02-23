import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/CourseCards/Card";
import styles from "../../styles/Cards.module.css";

export default function SearchList({ data }) {

  return (
    <div className={styles.cards}>
      {data?.map((course, index) => (
        <Link to={"/detail/" + course.id} key={index}>
          <Card src={course.image} title={course.title} author={course.by.fullName} videos={course.contents.length} materials={course.contents.length} description={course.description} category={course.category.name} id={course.id} />
        </Link>
      ))}
      
    </div>
  );
}
