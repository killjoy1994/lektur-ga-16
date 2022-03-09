import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ReactPlayer from "react-player";

import styles from "../../styles/ContentVideoMain.module.css";
import playBlue from "../../assests/play-blue.svg";
import playWhite from "../../assests/play-white.svg";
import play from "../../assests/on-play.svg";
import lock from "../../assests/lock.svg";
import check from "../../assests/green-check.svg";
import Card from "../../components/CourseCards/Card";
import assessment from "../../assests/assessment.svg";
import Loader from "../Loader/Loader";
import { getContentAction } from "../../redux/actions/Content/getContentAction";
import { getContentsAction } from "../../redux/actions/Content/getContentsAction";
import { getRelatedCourse } from "../../redux/actions/Courses/getCourseDetailAction";
import { getEnrolledCoursesAction } from "../../redux/actions/Courses/enrollCourseAction";
import postStudentProgress from "../../redux/actions/Student/postStudentProgress";

const token = localStorage.getItem("token");

const ContentVideoMain = () => {
  // Redux global state
  const { detail, isLoading, relatedCourse } = useSelector((state) => state.courseDetail);
  const { content: contentRedux, isLoading: contentLoading } = useSelector((state) => state.getContent);
  const { contentList, isLoading: contentsLoading } = useSelector((state) => state.getContents);
  const { enrolledCourses } = useSelector((state) => state.enrollCourse);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEnrolledCoursesAction(token));
    dispatch(getContentAction(params.courseId));
    dispatch(getContentsAction());
  }, []);

  useEffect(() => {
    if (contentRedux?.course?.category?.name) {
      dispatch(getRelatedCourse(contentRedux.course.category.name));
    }
  }, [contentRedux?.course?.category?.name]);

  // Untuk cari progress tiap course
  const filteredCourse = enrolledCourses?.filter((course) => {
    return course.id === contentRedux?.course.id;
  })[0];
  // console.log(filteredCourse);

  const progressContent = filteredCourse?.progress.map((content) => {
    // console.log(content);
    return content.content.id;
  });

  const filteredContents = contentList?.filter((contentItem) => {
    return contentItem.course.id === contentRedux?.course.id;
  });

  const filteredContentsId = filteredContents.map((data) => {
    return data.id;
  });

  // Handler for video ended
  const videoEndHandler = () => {
    if (!progressContent.includes(contentRedux?.id + 1) && progressContent.length !== filteredCourse.contents.length) {
      dispatch(postStudentProgress(contentRedux?.course.id, contentRedux?.id + 1));
    }

    // Auto play next video
    if (filteredContentsId.includes(contentRedux?.id + 1)) {
      dispatch(getContentAction(contentRedux?.id + 1));
    }
  };

  //Next button
  let idx = contentList.filter((data) => {
    if (data.id === contentRedux?.id + 1) {
      return data;
    }
  });

  // Button next Onclick Handler

  const nextContentHandler = () => {
    if (contentRedux?.id !== progressContent?.length || progressContent?.length !== filteredCourse?.contents.length) {
      dispatch(getContentAction(contentRedux.id + 1));
    }
  };

  // console.log(contentRedux);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header start */}
        {contentRedux && (
          <header className={styles.header}>
            {/* <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item href="#" active>
                {titleHeader || content.title}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">{titleHeader || (detail.contents && detail.contents[0].title)}</Breadcrumb.Item>
            </Breadcrumb> */}
            <h1 className={styles.title}>{contentRedux?.title}</h1>
          </header>
        )}
        {/* Header end */}

        {/* Video player and description start*/}
        <div className={styles["course-wrapper"]}>
          <section className={styles.content}>
            <ReactPlayer
              className={styles["video-player"]}
              controls
              url={contentRedux?.video}
              width="90%"
              height="450px"
              onEnded={videoEndHandler}
              // playing={true}
            />
            <div className={styles["content-list"]}>
              <>
                <h2>Content</h2>
                <ul>
                  {filteredContents?.map((content) => {
                    // console.log(progressContent);
                    if (progressContent?.includes(content.id)) {
                      let completed = progressContent.slice(0, progressContent.length - 1);
                      return (
                        <li
                          className={`${styles["content-video"]} ${contentRedux?.id === content.id ? styles.active : ""}`}
                          key={content.id}
                          onClick={() => {
                            dispatch(getContentAction(content.id));
                          }}
                        >
                          <span>
                            <img
                              src={
                                completed.includes(content.id) || progressContent.length === filteredCourse.contents.length
                                  ? check
                                  : contentRedux.id === content.id
                                  ? playBlue
                                  : play
                              }
                              alt="play"
                            />
                          </span>
                          {content.title.length > 15 ? content.title.slice(0, 30) + "..." : content.title}
                        </li>
                      );
                    } else {
                      return (
                        <li className={`${styles.disabled}`} key={content.id}>
                          <span>
                            <img src={lock} alt="lock" />
                          </span>
                          {content.title.length > 15 ? content.title.slice(0, 30) + "..." : content.title}
                        </li>
                      );
                    }
                  })}
                </ul>
              </>
            </div>
          </section>
          <section className={styles["description-wrapper"]}>
            <div className={styles.description}>
              <h2>Description</h2>
              <p>{contentRedux?.description}</p>
            </div>
            <div className={styles["read-materials"]}>
              <h2>What’s Next?</h2>
              {contentRedux?.materials.map((material) => {
                return (
                  <div className={`check-box-form ${styles.rounded}`} key={material.url}>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                      <label className="form-check-label" htmlFor="flexCheckDefault">
                        {material.name} : <a href={material.url}>{material.name}.pdf</a>
                      </label>
                    </div>
                  </div>
                );
              }) ||
                contentRedux?.materials.map((material) => {
                  return (
                    <div className={`check-box-form ${styles.rounded}`} key={material.url}>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          {material.name} : <a href={material.url}>{material.name}.pdf</a>
                        </label>
                      </div>
                    </div>
                  );
                })}
              {progressContent?.length === filteredCourse?.contents?.length &&
              contentRedux?.id === filteredCourse?.contents[filteredCourse?.contents.length - 1].id ? (
                <Link to="/final-assessment" className={styles["btn-aside"]} style={{ color: "white" }}>
                  <img src={assessment} alt="final assessment" />
                  Take Final Assessment
                </Link>
              ) : (
                <button className={styles["btn-aside"]} onClick={nextContentHandler}>
                  <img src={playWhite} alt="next button" />
                  Next lesson : {idx[0]?.title.slice(0, 20)}
                </button>
              )}
            </div>
          </section>
        </div>
        {/* Video player and description end*/}
      </div>

      {/* Cards gallery start */}
      <div className={styles.cards}>
        <div className={styles["card-container"]}>
          <h2>Related Course</h2>
          <div className={styles["card-list"]}>
            {relatedCourse?.map((course) => {
              let materialsCount = 0;
              course.contents.forEach((content) => {
                return (materialsCount += content.materials.length);
              });
              return (
                <Link to={`/detail/${course.id}`} key={course.id}>
                  <Card
                    src={course.image}
                    title={course.title}
                    author={course.by.fullName}
                    videos={course.contents.length}
                    materials={materialsCount}
                    description={course.description}
                    category={course.category.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      {/* Cards gallery end */}
    </main>
  );
};

export default ContentVideoMain;
