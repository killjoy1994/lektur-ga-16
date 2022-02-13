import { Modal } from "react-bootstrap";
import { useState } from "react";
import bg from "../assests/bg-detail.png";
import styles from "../styles/Detail.module.css";
import Card from "../components/CourseCards/Card";
import NavbarComponent from "../components/Header/NavbarComponent";
import Footer from "../components/Footer";
function Detail() {
  const [popUpDetail, setPopUpDetail] = useState(false);

  let dummyData = {
    src: "https://images.unsplash.com/photo-1643662372195-49a2b4ab6278?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Create Cinematic Music Video",
    author: "John Doe",
    videos: 15,
    materials: 3,
    description: "Vestibulum fusce parturient urna a molestie orci. Lectus id quisque amet et vel elementum morbi cursus. Amet sagittis semper mauris diam orci facilisis...",
    category: "Art & Humanity",
  };
  return (
    <>
    <NavbarComponent/>
    <div className={styles.main}>
      {/* <div className={styles.main} style={{ background: "#E5E5E5", height: "150vh" }}> */}
      <div className={styles.banner_detail} style={{ backgroundImage: `url(${bg})` }}>
        <div className={styles.contents}>
          <div className={`${styles.detail_content}`}>
            <p>Art & Humanity</p>
            <h3>Create Cinematic Music Video</h3>
            <p>By Justin Junaedi</p>
            <button className={styles.btn_detail} onClick={() => setPopUpDetail(true)}>
              ENROLL NOW
            </button>
          </div>
          <div className={styles.detail_box}>
            <div className={styles.content1}>
              <div>
                <p className={styles.p1}>14</p>
                <p className={styles.p2}>Learning Videos</p>
              </div>
              <div>
                <p className={styles.p1}>12</p>
                <p className={styles.p2}>Study Material</p>
              </div>
            </div>
            <div className={`${styles.content2} overflow-auto`}>
              <h5>Content</h5>
              <ul style={{ padding: "0" }}>
                <li>
                  <div className={styles.list_contents}>
                    <p>Lesson #1: What is React?</p>
                  </div>
                </li>
                <li>
                  <div className={styles.list_contents}>
                    <p>Lesson #2: Create React App</p>
                  </div>
                </li>
                <li>
                  <div className={styles.list_contents}>
                    <p>Lesson #3: CSS in React</p>
                  </div>
                </li>
                <li>
                  <div className={styles.list_contents}>
                    <p>Lesson #4: CSS in React</p>
                  </div>
                </li>
                <li>
                  <div className={styles.list_contents}>
                    <p>Lesson #5: CSS in React</p>
                  </div>
                </li>
                {/* <li>
                  <div className={styles.list_contents}>
                    <p>Lesson #6: CSS in React</p>
                  </div>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description_detail}>
        <div className={styles.description_content}>
          <h5>Description</h5>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from
            sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
            Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>

      {/* Cards gallery start */}
      <div className={styles.cards}>
        <div className={styles["card-container"]}>
          <h2>Related Course</h2>
          <div className={styles["card-list"]}>
            <Card src={dummyData.src} title={dummyData.title} author={dummyData.author} videos={dummyData.videos} materials={dummyData.materials} description={dummyData.description} category={dummyData.category} />
            <Card src={dummyData.src} title={dummyData.title} author={dummyData.author} videos={dummyData.videos} materials={dummyData.materials} description={dummyData.description} category={dummyData.category} />
            <Card src={dummyData.src} title={dummyData.title} author={dummyData.author} videos={dummyData.videos} materials={dummyData.materials} description={dummyData.description} category={dummyData.category} />
            <Card src={dummyData.src} title={dummyData.title} author={dummyData.author} videos={dummyData.videos} materials={dummyData.materials} description={dummyData.description} category={dummyData.category} />
          </div>
        </div>
      </div>
      {/* Cards gallery end */}
      <div>
        <Modal show={popUpDetail} onHide={() => setPopUpDetail(false)} size="lg" centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className={styles.popup_contents}>
              <div>
                <img src={bg} alt="popup-detail" />
              </div>
              <div className={styles.popup_detail}>
                <p className={styles.p1}>Successfully enrolled!</p>
                <p className={styles.p2}>Create Cinematic Music Video</p>
                <p className={styles.p3}>By Justin Junaedi</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer style={{ background: "#FAFAFA" }}>
            <div style={{ margin: "0 auto" }}>
              <p>Please wait coresponding teacher approve you!</p>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Detail;
