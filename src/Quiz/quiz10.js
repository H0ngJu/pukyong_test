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
      <button className="Option" onClick={() => navigate("/answer10")}>
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
      <ProgressBar num="10" />
      {/* <ProgressBar content="1" /> */}
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead content="다음 중 부경대 교내 행사가 아닌 것은?" />
      </div>
      <div className="discription">
        <div className="sub">
          핑크 캠퍼스, 대동제, 옐로우 캠퍼스, 화이트 캠퍼스
        </div>
      </div>
      <Option option="핑크 캠퍼스" />
      <Option option="대동제" />
      <Option option="옐로우 캠퍼스" />
      <Option option="화이트 캠퍼스" />
    </div>
  );
}
