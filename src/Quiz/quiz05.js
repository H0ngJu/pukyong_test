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
      <button className="Option" onClick={() => navigate("/answer05")}>
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
      <ProgressBar num="5" />
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead
          content="다음 중 필수 교양이 아닌 것은?"
          content1="(2023학년도 기준)"
        />
      </div>
      <Option option="대학생활과 진로" />
      <Option option="21세기 리더십" />
      <Option option="부경 인성 세미나" />
      <Option option="사유와 표현" />
      <Option option="컴퓨팅 사고" />
    </div>
  );
}
