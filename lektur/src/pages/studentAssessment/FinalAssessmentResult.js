import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../../styles/FinalAssessmentResult.module.css";
import correct from "../../assests/correct.png";
import wrong from "../../assests/wrong.png";

function FinalAssessmentResult() {
  return (
    <div style={{ background: "#fffafa", height: "180vh" }}>
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
            <p className={styles.p1}>73%</p>
            <p className={styles.p2}>11/15 Question Correct</p>
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
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check" style={{ marginLeft: "-21px" }}>
              <img src={correct} alt="ceklist" style={{ marginRight: "10px" }} />
              {/* <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3"/> */}
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option5" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
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
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check" style={{ marginLeft: "-21px" }}>
              <img src={correct} alt="ceklist" style={{ marginRight: "10px" }} />
              {/* <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3"/> */}
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option5" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
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
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check" style={{ marginLeft: "-21px" }}>
              <img src={correct} alt="ceklist" style={{ marginRight: "10px" }} />
              {/* <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3"/> */}
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option5" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
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
            <div className="form-check" style={{ marginLeft: "-21px" }}>
              <img src={wrong} alt="ceklist" style={{ marginRight: "10px" }} />
              {/* <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3"/> */}
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check" style={{ marginLeft: "-21px" }}>
              <img src={correct} alt="ceklist" style={{ marginRight: "10px" }} />
              {/* <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3"/> */}
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option5" disabled />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
          </div>
          <div className={styles.remark}>
            <p>Remark</p>
            <p>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FinalAssessmentResult;
