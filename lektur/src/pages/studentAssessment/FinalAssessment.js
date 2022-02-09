import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../../styles/FinalAssessment.module.css";
{/* <CustomRadio checked={true} correct={false} /> */}
function FinalAssessment() {
  // const correct = 'exampleRadios1'
  return (
    <div style={{ background: "#fffafa", height: "180vh" }}>
      <header className={styles.container_head}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item href="#" active>
            React Crash Cource
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Final Assessment</Breadcrumb.Item>
        </Breadcrumb>
        <h1 className={styles.title}>Final Assessment</h1>
      </header>
      <div className={styles.assessment_box}>
        <h6>5 Questions</h6>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            1.
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <div className="form-check">
              {/* {correct ===  'exampleRadios1' ? 'x' :  */}
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              {/* // } */}
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
              <label className="form-check-label" for="exampleRadios2">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
              <label className="form-check-label" for="exampleRadios3">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
              <label className="form-check-label" for="exampleRadios4">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option5" />
              <label className="form-check-label" for="exampleRadios5">
                Et mattis lacus fermentum id nec
              </label>
            </div>
          </div>
        </div>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            2.
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="option6" />
              <label className="form-check-label" for="exampleRadios6">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios7" value="option7" />
              <label className="form-check-label" for="exampleRadios7">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios8" value="option8" />
              <label className="form-check-label" for="exampleRadios8">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios9" value="option9" />
              <label className="form-check-label" for="exampleRadios9">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios10" value="option10" />
              <label className="form-check-label" for="exampleRadios10">
                Et mattis lacus fermentum id nec
              </label>
            </div>
          </div>
        </div>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            3.
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option5" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
          </div>
        </div>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            4.
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option5" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
          </div>
        </div>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            5.
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option5" />
              <label className="form-check-label" for="exampleRadios1">
                Et mattis lacus fermentum id nec
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <button>Submit Assessment</button>
      </div>
    </div>
  );
}

export default FinalAssessment;
