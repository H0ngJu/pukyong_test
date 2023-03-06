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
      <button className="Option" onClick={() => navigate("/answer08")}>
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
      <ProgressBar num="8" />
      {/* <ProgressBar content="1" /> */}
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead content="다음 중 틀리게 말하고 있는 사람은 몇 명인가?" />
      </div>
      <div className="discription">
        <div className="sub">
          백경이 : 나는 이번에 망해도 재수강해서 A+받을거야!
          <br />
          뿌공이 : 이번에 B0받았는데 아쉬우니까 재수강할거야!
          <br />
          박연진 : A+을 받은 학생이 아무도 없던데 성적을 잘못 주신게 아닐까?
          <br />
          문동은 : 1학년때 F받은과목 4학년때 재수강해야지!
        </div>
      </div>
      <Option option="1명" />
      <Option option="2명" />
      <Option option="3명" />
      <Option option="4명" />
    </div>
  );
}
