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
      <button className="Option" onClick={() => navigate("/answer03")}>
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
      <ProgressBar num="3" />
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead content="아래의 상황에서 2학기에 백경이가 신청할 수 있는 최대 학점은?" />
      </div>
      <div className="discription">
        <div className="sub">
          백경이는 최대 이수 학점이 18학점이 가능한 학과 학생이다. <br />
          백경이는 1학기에 17학점을 이수했고 성적은 4.1이었다.
        </div>
      </div>
      <Option option="18" />
      <Option option="19" />
      <Option option="20" />
      <Option option="21" />
    </div>
  );
}
