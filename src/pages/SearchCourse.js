import React from 'react'
import { useSelector } from 'react-redux';
import Footer from '../components/Footer'
import NavbarComponent from '../components/Header/NavbarComponent'
// import Card from "../components/CourseCards/Card";
import styles from "../styles/SearchCourse.module.css";

export default function SearchCourse() {
  const { searchCourses } = useSelector((state) => state.searchCourses);

  console.log(searchCourses[0]);
  return (
    
    <>
    <NavbarComponent/>
    <div>
        {/* <h5>Search Page</h5> */}
        <div className={styles.cards}>
          <div className={styles["card-container"]}>
            <h2>Search Course</h2>
            <div className={styles["card-list"]}>
            <h1>{searchCourses[0].title}</h1>
            <h1>author: {searchCourses[0].by.fullName}</h1>
            <img src={searchCourses[0].image}/>
                {/* {searchCourses.map((course)=>(
                    console.log(course)
            <Card
            key={course.id}
            src={} 
            title={} 
            author={} 
            videos={}
             materials={} 
             description={} 
             category={} />
                ))} */}
             
            </div>
          </div>
        </div>
    
    </div>
    <Footer/>
    </>
  )
}
