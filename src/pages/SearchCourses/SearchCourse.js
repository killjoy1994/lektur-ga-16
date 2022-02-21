import React from 'react'
import { useSelector } from 'react-redux';
import Footer from '../../components/Footer'
import NavbarComponent from '../../components/Header/NavbarComponent'
// import Card from "../components/CourseCards/Card";
import styles from "../../styles/SearchCourse.module.css";
import SearchList from './SearchList';

export default function SearchCourse() {
  const { input } = useSelector((state) => state.searchCourses);

  // console.log(searchCourses.map(item=> console.log(item.title)));
  return (
    
    <div className={styles.Category}>
      <NavbarComponent />
      <main className={styles["category-container"]}>
        <h1 className={styles.title}>hasil pencarian untuk "{input}"</h1>
        <h3 className={styles.subtitle}>Courses to get you started</h3>
        <SearchList />
      </main>
      <Footer />
    </div>
  )
}
