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
  const { content, isLoading: contentLoading } = useSelector((state) => state.getContent);
  const { contentList, isLoading } = useSelector((state) => state.getContents);

  const [titleHeader, setTitleHeader] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [material, setMaterial] = useState({});

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContentAction(params.courseId));
    dispatch(getContentsAction());
  }, [dispatch]);

  let filteredContents;
  if (content) {
    filteredContents = contentList.filter((contentItem) => {
      return contentItem["course_id"] === content.id;
    });
  }

  const changeContentHandler = (title, description, video) => {
    setTitleHeader(title);
    setDescription(description);
    setVideoUrl(video);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Header start */}

        {content && (
          <header className={styles.header}>
            <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item href="#" active>
                {isLoading ? "" : titleHeader ? titleHeader : filteredContents[0].title}
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#">{isLoading ? "" : titleHeader ? titleHeader : filteredContents[0].title}</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className={styles.title}>{isLoading ? "" : titleHeader ? titleHeader : filteredContents[0].title}</h1>
          </header>
        )}
        {/* Header end */}

        {/* Video player and description start*/}
        <div className={styles["course-wrapper"]}>
          <section className={styles.content}>
            {contentLoading ? (
              <Loader />
            ) : (
              <ReactPlayer
                className={styles["video-player"]}
                controls
                url={videoUrl ? videoUrl : filteredContents[0].video ? filteredContents[0].video : videoUrl}
                width="90%"
                height="450px"
                playing={true}
              />
            )}
            <div className={styles["content-list"]}>
              {isLoading ? (
                <Loader />
              ) : (
                <>
                  <h2>Content</h2>
                  <ul>
                    {filteredContents?.map((content) => {
                      return (
                        <li
                          className={styles["content-video"]}
                          key={content.id}
                          onClick={() => changeContentHandler(content.title, content.description, content.video)}
                          style={{ cursor: "pointer" }}
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
              )}
            </div>
          </section>
          <section className={styles["description-wrapper"]}>
            <div className={styles.description}>
              <h2>Description</h2>
              {/* {isLoading ? null : console.log(filteredContents[0])} */}
              {isLoading ? <Loader /> : <p>{description ? description : filteredContents ? filteredContents[0].title : ""} </p>}
            </div>
            <div className={styles["read-materials"]}>
              <h2>What’s Next?</h2>
              <div className="check-box-form" className={styles.rounded}>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Read course material : <a href="#">React and Open Source.pdf</a>
                  </label>
                </div>
              </div>
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
            <Card
              src={dummyData.src}
              title={dummyData.title}
              author={dummyData.author}
              videos={dummyData.videos}
              materials={dummyData.materials}
              description={dummyData.description}
              category={dummyData.category}
            />
            <Card
              src={dummyData.src}
              title={dummyData.title}
              author={dummyData.author}
              videos={dummyData.videos}
              materials={dummyData.materials}
              description={dummyData.description}
              category={dummyData.category}
            />
            <Card
              src={dummyData.src}
              title={dummyData.title}
              author={dummyData.author}
              videos={dummyData.videos}
              materials={dummyData.materials}
              description={dummyData.description}
              category={dummyData.category}
            />
            <Card
              src={dummyData.src}
              title={dummyData.title}
              author={dummyData.author}
              videos={dummyData.videos}
              materials={dummyData.materials}
              description={dummyData.description}
              category={dummyData.category}
            />
          </div>
        </div>
      </div>
      {/* Cards gallery end */}
    </main>
  );
};

export default ContentVideoMain;
