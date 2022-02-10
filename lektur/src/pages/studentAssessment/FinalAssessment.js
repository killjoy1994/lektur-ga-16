import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "../../styles/FinalAssessment.module.css";
{
  /* <CustomRadio checked={true} correct={false} /> */
}
function FinalAssessment() {
  // const correct = 'exampleRadios1'
  return (
    <div className={styles.wrapper_assessment}>
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
            <p>1.</p>
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            {/* {correct ===  'exampleRadios1' ? 'x' :  */}
            <input type="radio" name="soal1" id="pilihanA" value="A" />
            {/* // } */}
            <label for="pilihanA">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal1" id="pilihanB" value="B" />
            <label for="pilihanB">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal1" id="pilihanC" value="C" />
            <label for="pilihanC">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal1" id="pilihanD" value="D" />
            <label for="pilihanD">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal1" id="pilihanE" value="E" />
            <label for="pilihanE">Et mattis lacus fermentum id nec</label>
          </div>
        </div>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            <p>2.</p>
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <input type="radio" name="soal2" id="pilihanA" value="A" />
            <label for="pilihanA">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal2" id="pilihanB" value="B" />
            <label for="pilihanB">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal2" id="pilihanC" value="C" />
            <label for="pilihanC">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal2" id="pilihanD" value="D" />
            <label for="pilihanD">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal2" id="pilihanE" value="E" />
            <label for="pilihanE">Et mattis lacus fermentum id nec</label>
          </div>
        </div>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            <p>3.</p>
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <input type="radio" name="soal3" id="pilihanA" value="A" />
            <label for="pilihanA">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal3" id="pilihanB" value="B" />
            <label for="pilihanB">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal3" id="pilihanC" value="C" />
            <label for="pilihanC">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal3" id="pilihanD" value="D" />
            <label for="pilihanD">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal3" id="pilihanE" value="E" />
            <label for="pilihanE">Et mattis lacus fermentum id nec</label>
          </div>
        </div>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            <p>4.</p>
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <input type="radio" name="soal4" id="pilihanA" value="A" />
            <label for="pilihanA">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal4" id="pilihanB" value="B" />
            <label for="pilihanB">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal4" id="pilihanC" value="C" />
            <label for="pilihanC">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal4" id="pilihanD" value="D" />
            <label for="pilihanD">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal4" id="pilihanE" value="E" />
            <label for="pilihanE">Et mattis lacus fermentum id nec</label>
          </div>
        </div>
        <div className={styles.question_list}>
          <div className={styles.box_question}>
            <p>5.</p>
            <p className={styles.question}>Neque eu lorem ultrices id. Et mattis lacus fermentum id nec, aenean enim, curabitur. Enim, donec quis odio ut enim scelerisque id erat laoreet?</p>
          </div>
          <p className={styles.answer}>Answer</p>
          <div className={styles.answer_list}>
            <input type="radio" name="soal5" id="pilihanA" value="A" />
            <label for="pilihanA">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal5" id="pilihanB" value="B" />
            <label for="pilihanB">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal5" id="pilihanC" value="C" />
            <label for="pilihanC">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal5" id="pilihanD" value="D" />
            <label for="pilihanD">Et mattis lacus fermentum id nec</label>
            <br />
            <input type="radio" name="soal5" id="pilihanE" value="E" />
            <label for="pilihanE">Et mattis lacus fermentum id nec</label>
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
