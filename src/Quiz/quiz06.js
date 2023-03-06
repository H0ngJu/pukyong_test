import "./quiz.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./quiz01";

function QuizHead(props) {
  return (
    <div>
      <div className="QuizHead">{props.content}</div>
      <div className="QuizHead">{props.content1}</div>
    </div>
  );
}

function Option(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button className="Option" onClick={() => navigate("/answer06")}>
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
      <ProgressBar num="6" />
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead content="다음 표를 보고 백경이가 우선적으로 들어야하는 영역/역량을 고르시오" />
      </div>
      <div>
        <img src="tableImage.png" alt="" className="tableImg"></img>
      </div>
      <Option option="인간문화영역/주도적학습" />
      <Option option="사회역사영역/통섭적사고" />
      <Option option="자연과학기술영역/문화적포용" />
      <Option option="자연과학기술영역/사회적 실천" />
    </div>
  );
}
