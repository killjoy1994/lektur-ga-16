import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ReactPlayer from "react-player";

import styles from "../../styles/ContentVideoMain.module.css";
import playBlue from "../../assests/play-blue.svg";
import playWhite from "../../assests/play-white.svg";
import play from "../../assests/on-play.svg";
import lock from "../../assests/lock.svg";
// import check from "../../assests/green-check.svg";
import Card from "../../components/CourseCards/Card";
import Loader from "../Loader/Loader";
import { useEffect } from "react";
import { getContentAction } from "../../redux/actions/Content/getContentAction";
import { getContentsAction } from "../../redux/actions/Content/getContentsAction";
import { getCoursesAction } from "../../redux/actions/Courses/getCoursesAction";
import { getCourseDetail, getRelatedCourse } from "../../redux/actions/Courses/getCourseDetailAction";

let dummyData = {
  src: "https://images.unsplash.com/photo-1643662372195-49a2b4ab6278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  title: "Create Cinematic Music Video",
  author: "John Doe",
  videos: 15,
  materials: 3,
  description:
    "Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam orci facilisis...",
  category: "Art & Humanity",
};

const ContentVideoMain = () => {
  const [titleHeader, setTitleHeader] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [description, setDescription] = useState("");
  const [materials, setMaterials] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const { detail, isLoading, relatedCourse } = useSelector((state) => state.courseDetail);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      await dispatch(getCourseDetail(params.courseId));
      await dispatch(getRelatedCourse(detail.category));
    })();
  }, [dispatch]);

  const changeContentHandler = (title, url, description, materials) => {
    setTitleHeader(title);
    setVideoUrl(url);
    setDescription(description);
    setMaterials(materials);
    setIsActive(true);
  };

  let materialTotal = 0;

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header start */}
        {detail && (
          <header className={styles.header}>
            <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item href="#" active>
                {titleHeader || detail.title}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">{titleHeader || (detail.contents && detail.contents[0].title)}</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className={styles.title}>{titleHeader || (detail.contents && detail.contents[0].title)}</h1>
          </header>
        )}
        {/* Header end */}

        {/* Video player and description start*/}
        <div className={styles["course-wrapper"]}>
          <section className={styles.content}>
            <ReactPlayer
              className={styles["video-player"]}
              controls
              url={videoUrl || (detail.contents && detail.contents[0].video)}
              width="90%"
              height="450px"
              // playing={true}
            />
            <div className={styles["content-list"]}>
              <>
                <h2 style={{ position: "sticky", top: 0, background: "#fff" }}>Content</h2>
                <ul>
                  {detail.contents?.map((content) => {
                    return (
                      <li
                        className={styles["content-video"]}
                        key={content.id}
                        style={{ cursor: "pointer" }}
                        onClick={() => changeContentHandler(content.title, content.video, content.description, content.materials)}
                      >
                        <span>
                          <img src={play} alt="play" />
                        </span>
                        {content.title}
                      </li>
                    );
                  })}
                </ul>
              </>
            </div>
          </section>
          <section className={styles["description-wrapper"]}>
            <div className={styles.description}>
              <h2>Description</h2>

              <p>{description || (detail.contents && detail.contents[0].description)}</p>
            </div>
            <div className={styles["read-materials"]}>
              <h2>What’s Next?</h2>
              {(materials.length &&
                materials.map((material) => {
                  return (
                    <div className="check-box-form" className={styles.rounded} key={material.id}>
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          {material.name} : <a href={material.url}>{material.name}.pdf</a>
                        </label>
                      </div>
                    </div>
                  );
                })) ||
                (detail.contents &&
                  detail.contents[0].materials.map((material) => {
                    return (
                      <div className="check-box-form" className={styles.rounded} key={material.id}>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            {material.name} : <a href={material.url}>{material.name}.pdf</a>
                          </label>
                        </div>
                      </div>
                    );
                  }))}
              <button className={styles["btn-aside"]}>
                <img src={playWhite} alt="next button" />
                Next Lesson: Create React App
              </button>
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
            {console.log(relatedCourse)}
            {relatedCourse?.map(course => {
              // for(let i = 0; i < course.contents.material.length; i++) {
              //   materialTotal++
              // }
              return (
                <Card
                key={course.id}
                  src={course.image}
                  title={course.title}
                  author={course.by.fullName}
                  videos={course.contents.length}
                  materials={5}
                  description={course.description}
                  category={course.category.name}
                />
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
