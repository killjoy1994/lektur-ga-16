import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../../styles/FinalAssessmentResult.module.css";
import correct from "../../assests/correct.png";
import wrong from "../../assests/wrong.png";
import NavbarComponent from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FinalAssessmentResult(props) {
  const benar = "pilihanC";
  const { state } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.score) {
      navigate("/final-assessment");
    }
  }, [state.score]);
  return (
    <>
      <NavbarComponent />
      <div className={styles.wrapper_assessment}>
        <header className={styles.container_head}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item href="#" active>
              React Crash Cource
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#" active>
              Final Assessment
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Result</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.data_nilai}>
            <h1 className={styles.title}>Final Assessment Result</h1>
            <div className={styles.evaluation}>
              <p className={styles.p1}>{state?.score}</p>
              <p className={styles.p2}>{state.answer}/{state.questions} Question Correct</p>
            </div>
          </div>
        </header>
        <div className={styles.assessment_box}>
          <h6>15 Questions</h6>
          <div className={styles.question_list}>
            <div className={styles.box_question}>
              <p>1.</p>
              <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
              <p className={`ms-auto ${styles.correction}`}>Correct</p>
            </div>
            <p className={styles.answer}>Answer</p>
            <div className={styles.answer_list}>
              <input type="radio" name="soal1" id="pilihanA" value="A" disabled />
              <label htmlFor="pilihanA">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanB" value="B" disabled />
              <label htmlFor="pilihanB">Et mattis lacus fermentum id nec</label>
              <br />
              {benar === "pilihanC" ? <img src={correct} alt="ceklist" style={{ marginRight: "10px" }} /> : <input type="radio" name="soal1" id="pilihanC" value="C" />}
              <label htmlFor="pilihanC" style={{ fontWeight: "bold" }}>
                Et mattis lacus fermentum id nec
              </label>
              <br />
              <input type="radio" name="soal1" id="pilihanD" value="D" disabled />
              <label htmlFor="pilihanD">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanE" value="E" disabled />
              <label htmlFor="pilihanE">Et mattis lacus fermentum id nec</label>
            </div>
          </div>
          <div className={styles.question_list}>
            <div className={styles.box_question}>
              <p>1.</p>
              <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
              <p className={`ms-auto ${styles.correction}`}>Correct</p>
            </div>
            <p className={styles.answer}>Answer</p>
            <div className={styles.answer_list}>
              <input type="radio" name="soal1" id="pilihanA" value="A" disabled />
              <label htmlFor="pilihanA">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanB" value="B" disabled />
              <label htmlFor="pilihanB">Et mattis lacus fermentum id nec</label>
              <br />
              <img src={correct} alt="ceklist" style={{ marginRight: "10px" }} />
              {/* <input type="radio" name="soal1" id="pilihanC" value="C" /> */}
              <label htmlFor="pilihanC" style={{ fontWeight: "bold" }}>
                Et mattis lacus fermentum id nec
              </label>
              <br />
              <input type="radio" name="soal1" id="pilihanD" value="D" disabled />
              <label htmlFor="pilihanD">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanE" value="E" disabled />
              <label htmlFor="pilihanE">Et mattis lacus fermentum id nec</label>
            </div>
          </div>
          <div className={styles.question_list}>
            <div className={styles.box_question}>
              <p>1.</p>
              <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
              <p className={`ms-auto ${styles.correction}`}>Correct</p>
            </div>
            <p className={styles.answer}>Answer</p>
            <div className={styles.answer_list}>
              <input type="radio" name="soal1" id="pilihanA" value="A" disabled />
              <label htmlFor="pilihanA">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanB" value="B" disabled />
              <label htmlFor="pilihanB">Et mattis lacus fermentum id nec</label>
              <br />
              <img src={correct} alt="ceklist" style={{ marginRight: "10px" }} />
              {/* <input type="radio" name="soal1" id="pilihanC" value="C" /> */}
              <label htmlFor="pilihanC" style={{ fontWeight: "bold" }}>
                Et mattis lacus fermentum id nec
              </label>
              <br />
              <input type="radio" name="soal1" id="pilihanD" value="D" disabled />
              <label htmlFor="pilihanD">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanE" value="E" disabled />
              <label htmlFor="pilihanE">Et mattis lacus fermentum id nec</label>
            </div>
          </div>

          <div className={styles.question_list}>
            <div className={styles.box_question}>
              <p>1.</p>
              <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
              <p className={`ms-auto ${styles.correction_wrong}`}>Wrong</p>
            </div>
            <p className={styles.answer}>Answer</p>
            <div className={styles.answer_list}>
              <img src={wrong} alt="ceklist" />
              <label htmlFor="pilihanA">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanB" value="B" disabled />
              <label htmlFor="pilihanB">Et mattis lacus fermentum id nec</label>
              <br />
              <img src={correct} alt="ceklist" />
              <label htmlFor="pilihanC" style={{ fontWeight: "bold" }}>
                Et mattis lacus fermentum id nec
              </label>
              <br />
              <input type="radio" name="soal1" id="pilihanD" value="D" disabled />
              <label htmlFor="pilihanD">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanE" value="E" disabled />
              <label htmlFor="pilihanE">Et mattis lacus fermentum id nec</label>
            </div>
            <div className={styles.remark}>
              <p>Remark</p>
              <p>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
            </div>
          </div>
          <div className={styles.question_list}>
            <div className={styles.box_question}>
              <p>1.</p>
              <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
              <p className={`ms-auto ${styles.correction_wrong}`}>Wrong</p>
            </div>
            <p className={styles.answer}>Answer</p>
            <div className={styles.answer_list}>
              <img src={wrong} alt="ceklist" />
              <label htmlFor="pilihanA">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanB" value="B" disabled />
              <label htmlFor="pilihanB">Et mattis lacus fermentum id nec</label>
              <br />
              <img src={correct} alt="ceklist" />
              <label htmlFor="pilihanC" style={{ fontWeight: "bold" }}>
                Et mattis lacus fermentum id nec
              </label>
              <br />
              <input type="radio" name="soal1" id="pilihanD" value="D" disabled />
              <label htmlFor="pilihanD">Et mattis lacus fermentum id nec</label>
              <br />
              <input type="radio" name="soal1" id="pilihanE" value="E" disabled />
              <label htmlFor="pilihanE">Et mattis lacus fermentum id nec</label>
            </div>
            <div className={styles.remark}>
              <p>Remark</p>
              <p>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FinalAssessmentResult;
