import "./quiz.css";
import { useNavigate } from "react-router-dom";

export function ProgressBar(props) {
  var num = 1;
  var guage = props.num * 10;

  return (
    <div className="progressBar">
      <div className="progressNum" value={props.num}>{`${props.num}/20`}</div>
      <progress value={guage} max="200" />
    </div>
  );
}

// function ProgressBar(props) {
//   return (
//     <div className="progressBar">
//       <div className="progressContent">{props.content}/20</div>
//       <sapn className="progress">
//         <span className="guage" />
//       </sapn>
//     </div>
//   );
// }

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
      <button className="Option" onClick={() => navigate("/answer01")}>
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
      <ProgressBar num="1" />
      {/* <ProgressBar content="1" /> */}
      <div className="row">
        <QuizImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102117661_33062.png" />
        <QuizHead
          content="본수강신청 기간 중 수간신청 취소할 경우, 수강 신청 어플에서 "
          content1="해당 여석이 취소 즉시 시스템에 반영되지 않는다."
        />
      </div>
      <Option option="O" />
      <Option option="X" />
    </div>
  );
}
