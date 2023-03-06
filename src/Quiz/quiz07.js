import "./quiz.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./quiz01";

function QuizHead(props) {
  return (
    <div>
      <div className="QuizHead">{props.content}</div>
    </div>
  );
}

function Option(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button className="Option" onClick={() => navigate("/answer07")}>
        {props.option}
      </button>
    </div>
  );
}

function QuizImg(props) {
  return <img src={props.url} alt="" className="QuizImg" />;
}

export default function Quiz01() {
  // const movePage = useNavigate;

  // function gotype(){
  //   movePage('/type');
  // }

  return (
    <div className="Quiz">
      <ProgressBar num="7" />
      {/* <ProgressBar content="1" /> */}
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead content="다음 중 성적 공시와 관련된 기간이 순서대로 나열된 것을 고르시오" />
      </div>
      <div className="discription">
        <div className="sub">
          A : 강의평가 → 성적확인 → 이의신청
          <br />
          B : 성적확인 → 강의평가 → 이의신청
          <br />C : 성적확인 → 이의신청 → 강의평가
        </div>
      </div>
      <Option option="A" />
      <Option option="B" />
      <Option option="C" />
    </div>
  );
}
