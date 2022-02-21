import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCoursesAction } from "../../redux/actions/Courses/getCoursesAction";
import styles from "../../styles/MainContent.module.css";
import Cards from "../CourseCards/Cards";
import CategoryGroup from "./CategoryGroup";
import Loader from "../Loader/Loader";

const MainContent = () => {
  const { courseList, isLoading } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesAction());
  }, [dispatch]);

  return (
    <div className={styles["main-content"]}>
      <h2 className={styles.title}>What To Learn Next</h2>
      <CategoryGroup />
      {isLoading ? <Loader /> : <Cards courseList={courseList} />}
    </div>
  );
};

export default MainContent;
