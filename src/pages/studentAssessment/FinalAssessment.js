import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavbarComponent from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";
import styles from "../../styles/FinalAssessment.module.css";
import { Link, useParams } from "react-router-dom";
import { getAssessment } from "../../redux/actions/Assessment/assessmentAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
{
  /* <CustomRadio checked={true} correct={false} /> */
}
function FinalAssessment() {
  // const correct = 'exampleRadios1'
  const { assessment } = useSelector((state) => state.assessments);
  const [answerStudent, setAnswerStudent] = useState({});
  const dispatch = useDispatch();
  let jawaban = [];

  const params = useParams();
  useEffect(() => {
    dispatch(getAssessment(params.id));
  }, [dispatch]);
  // console.log(assessment);
  const questions = assessment?.assessment?.questions;
  // console.log(questions);

  const handleAnswer = (e) => {
    setAnswerStudent({
      ...answerStudent,
      [e.target.name]: e.target.value
    })
    // const bySoal = [
    //   {
    //     name: e.target.name,
    //     value: e.target.value,
    //   },
    // ];
    // const cekJawaban = jawaban.filter((item) => item.name !== e.target.name);
    // cekJawaban.push(...bySoal);
    // jawaban = [];
    // jawaban.push(...cekJawaban);
    // jawaban.sort();
    // console.log(jawaban);
  };

  console.log(answerStudent);
  const handleSubmit = () => {};

  return (
    <>
      <NavbarComponent />
      <div className={styles.wrapper_assessment}>
        <header className={styles.container_head}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item href="#" active>
              {assessment?.title}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Final Assessment</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className={styles.title}>Final Assessment</h1>
        </header>
        <div className={styles.assessment_box}>
          <h6>{assessment?.assessment?.questions?.length} Questions</h6>

          {/* {correct ===  'exampleRadios1' ? 'x' :  */}
          {/* // } */}
          {questions?.map((question, idx) => (
            <div className={styles.question_list} key={question?.id}>
              <div className={styles.box_question}>
                <p>{idx + 1}.</p>
                <p className={styles.question}>{question?.question}</p>
              </div>
              <p className={styles.answer}>Answer</p>
              <div className={styles.answer_list}>
                {question?.options?.map((option) => (
                  <label htmlFor={option?.id} key={option.id}>
                      <input type="radio" name={option?.question_id} id={option?.id} value={option?.option} onChange={(e)=>handleAnswer(e)} />
                      
                      {option?.option}</label>
                  
                  // <div key={option.id}>
                  // </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.button}>
          <Link to="/final-assessment-result">
            <button onClick={handleSubmit}>Submit Assessment</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FinalAssessment;
