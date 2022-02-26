import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import NavbarComponent from "../../components/Header/NavbarComponent";
import styles from "../../styles/SearchCourse.module.css";
import SearchList from "./SearchList";
import Loader from "../../components/Loader/Loader";

export default function SearchCourse() {
  const { searchCourses, input, isLoading, error } = useSelector((state) => state.searchCourses);

  return (
    <div className={styles.Category}>
      <NavbarComponent />

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
      <Footer />
    </div>
  );
}
