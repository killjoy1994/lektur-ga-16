import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavbarComponent from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";
import styles from "../../styles/FinalAssessment.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAssessment, getAssessmentAnswer } from "../../redux/actions/Assessment/assessmentAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";


function FinalAssessment() {
  // const correct = 'exampleRadios1'
  const { assessment, assessmentAnswer } = useSelector((state) => state.assessments);
  const [answerStudent, setAnswerStudent] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const params = useParams();
  useEffect(() => {
    // dispatch(getAssessment(params.id));
    dispatch(getAssessmentAnswer(params.id));
  }, [dispatch]);
  //get assessment
  // const questions = assessment?.assessment?.questions;
  const questions = assessmentAnswer?.assessment?.questions;

  const handleAnswer = (e) => {
    const isCorrect = questions.find((question) => question.id == e.target.name && question.remarks === e.target.value);
    const isExist = answerStudent.find((answer) => answer.id === e.target.name);

    if (isCorrect && !isExist) {
      setAnswerStudent([...answerStudent, { id: e.target.name, remarks: e.target.value }]);
    } else {
      if (isExist) {
        const selected = answerStudent.filter((answer) => answer.id !== e.target.name);
        setAnswerStudent(selected);
      }
    }
  };
  // console.log(answerStudent);

  const handleSubmit = () => {
    // navigate("/final-assessment-result", { state: { score: (answerStudent.length / 10) * 100 + "%", answer: answerStudent.length, questions: assessmentAnswer?.assessment?.questions?.length } });
    Swal.fire({
      icon: "info",
      title: "Score: " + (answerStudent.length / 10) * 100 + "%",
      text: answerStudent.length + "/" + assessmentAnswer?.assessment?.questions?.length + " Question Correct",
      footer: "ASSESSMENT RESULT",
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        navigate("/");
      }
    });
  };

  return (
    <>
      <NavbarComponent />
      <div className={styles.wrapper_assessment}>
        <header className={styles.container_head}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item href="#" active>
              {/* {assessment?.title} */}
              {assessmentAnswer?.title}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Final Assessment</Breadcrumb.Item>
          </Breadcrumb>
          <h1 className={styles.title}>Final Assessment</h1>
        </header>
        <div className={styles.assessment_box}>
          <h6>{assessment?.assessment?.questions?.length} Questions</h6>

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
                    <input type="radio" name={option?.question_id} id={option?.id} value={option?.option} onChange={handleAnswer} />
                    {option?.option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.button}>
          <button onClick={handleSubmit}>Submit Assessment</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FinalAssessment;
