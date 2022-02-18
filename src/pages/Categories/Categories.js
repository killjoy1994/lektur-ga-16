import React from "react";
import NavbarComponent from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";

import styles from "../../styles/CategoryPage.module.css";
import CourseList from "./CourseList";
import { useParams } from "react-router-dom";

const Categories = () => {
  const params = useParams();

  return (
    <div className={styles.Category}>
      <NavbarComponent />
      <main className={styles["category-container"]}>
        <h1 className={styles.title}>{params.name} Courses</h1>
        <h3 className={styles.subtitle}>Courses to get you started</h3>
        <CourseList />
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
