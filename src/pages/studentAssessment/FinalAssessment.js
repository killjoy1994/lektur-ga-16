import Breadcrumb from "react-bootstrap/Breadcrumb";
import NavbarComponent from "../../components/Header/NavbarComponent";
import Footer from "../../components/Footer";
import styles from "../../styles/FinalAssessment.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAssessment, getAssessmentAnswer } from "../../redux/actions/Assessment/assessmentAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
{
  /* <CustomRadio checked={true} correct={false} /> */
}
function FinalAssessment() {
  // const correct = 'exampleRadios1'
  const { assessment, assessmentAnswer } = useSelector((state) => state.assessments);
  const [answerStudent, setAnswerStudent] = useState([]);
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let jawaban = [];

  const params = useParams();
  useEffect(() => {
    // dispatch(getAssessment(params.id));
    dispatch(getAssessmentAnswer(params.id));
  }, [dispatch]);
  //get assessment
  // const questions = assessment?.assessment?.questions;
  const questions = assessmentAnswer?.assessment?.questions;
  const kunciJawaban = questions?.map((item) => item.remarks);
  const questionId = questions?.map((item) => item.id);
  // console.log(questions);
  // console.log(kunciJawaban);
  const handleAnswer = (e) => {
    const isCorrect = questions.find((question) => question.id == e.target.name && question.remarks === e.target.value);
    const isExist = answerStudent.find((answer) => answer.id === e.target.name);
    if (isCorrect && !isExist) {
      setAnswerStudent([...answerStudent, { id: e.target.name, remarks: e.target.value }]);
    }
  };

  // 
  // console.log(questions);
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
  console.log(answerStudent);
  const handleSubmit = () => {
    navigate("/final-assessment-result", { state: { score: (answerStudent.length / 10) * 100 + "%", answer: answerStudent.length, questions: assessmentAnswer?.assessment?.questions?.length } });
    setScore((answerStudent.length / 10) * 100 + "%");
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
                    <input type="radio" name={option?.question_id} id={option?.id} value={option?.option} onChange={handleAnswer} />
                    {option?.option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.button}>
          {/* <Link
            to={{
              pathname: "/final-assessment-result",
              state: 
                score: (answerStudent.length / 10) * 100 + "%",
                'cococo'
              ,
            }}
          > */}
          <button onClick={handleSubmit}>Submit Assessment</button>
          {/* </Link> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FinalAssessment;
