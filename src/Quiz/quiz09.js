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
      <button className="Option" onClick={() => navigate("/answer09")}>
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
      <ProgressBar num="9" />
      {/* <ProgressBar content="1" /> */}
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead content="다음 중 MT에 가능한 복장은?" />
      </div>
      <Option option="교복" />
      <Option option="트레이닝 복" />
      <Option option="군복" />
    </div>
  );
}
