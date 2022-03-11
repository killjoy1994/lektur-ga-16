import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import NavbarComponent from "../../components/Header/NavbarComponent";
import styles from "../../styles/SearchCourse.module.css";
import SearchList from "./SearchList";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { getSearchCourse } from "../../redux/actions/Courses/getSearchCourseAction";

export default function SearchCourse() {
  const { searchCourses, input, isLoading, error } = useSelector((state) => state.searchCourses);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getSearchCourse(params.input));
  }, [dispatch, params.input]);

  return (
    <>
      <NavbarComponent />

      <div className={styles.Category}>
        <main className={styles["category-container"]}>
          {error ? (
            <h3 className={styles.msg_errors}>Sorry, we couldn't find any results for "{input}"</h3>
          ) : (
            <>
              <h1 className={styles.title}>
                {searchCourses?.length} results for "{input}"
              </h1>
              <h3 className={styles.subtitle}>Courses to get you started</h3>
            </>
          )}

          {isLoading && !error ? <Loader /> : <SearchList data={searchCourses} />}
        </main>
      </div>

      <Footer />
    </>
  );
}
