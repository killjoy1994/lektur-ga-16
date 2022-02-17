import React from "react";
import { Link, useParams } from "react-router-dom";

import Card from "../../components/CourseCards/Card";
import styles from "../../styles/Cards.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCoursesAction } from "../../redux/actions/coursesAction";

const CourseList = () => {
  const { courseList, isLoading, error } = useSelector((state) => state.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch]);

  const params = useParams();
  console.log(params.name);

  return (
    <div className={styles.cards}>
      {/* {courseList.filter((course) => {
        if (course.category.name === params.name) {
          //   return (
          //     <Link to="/detail">
          //       <Card
          //         src={course.image}
          //         title={course.title}
          //         author={course.by.fullName}
          //         videos={"15"}
          //         materials={"4"}
          //         description={course.description}
          //         category={course.category.name}
          //         id={course.id}
          //       />
          //     </Link>
          //   );
        }
      })} */}
      {isLoading ? <p>Loading</p> : <h2>{courseList[0].title}</h2>}
    </div>
  );
};

export default CourseList;
