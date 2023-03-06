import "./Answer.css";
import { useNavigate, useLocation } from "react-router-dom";

export function ProgressBar(props) {
  var num = 1;
  var guage = props.num * 10;
  const count = useLocation();
  console.log(count);
  return (
    <div className="progressBar">
      <div className="progressNum" value={props.num}>{`${props.num}/20`}</div>
      <progress value={guage} max="200" />
    </div>
  );
}

function NextBtn(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz02")}
        style={{ top: props.top }}>
        다음으로
      </button>
    </div>
  );
}
export default function answer01() {
  return (
    <div className="App" style={{height: "120vh"}}>
      <ProgressBar num="1" />
      <div className="AnsTitle" style={{width: "90%"}}>
        신청을 취소해도 여석이 바로 생기지 않으니 신중하게 결정하세요!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="normal Ans" style={{ top: "5vh", lineHeight: "30px" }}>
        누군가 수강신청한 과목을 취소할 경우, 해당 여석은 시스템에 즉시 반영되지 않습니다. <br/> 
        취소했을 때 현원은 학사행정정보시스템의 수업시간표 및 강의계획서 조회 메뉴에서
        실시간으로 확인이 가능하지만, 신청할 수 있는 여석은 랜덤한 시간 뒤에 생기는데요. <br/>
        따라서 이루미에서 누군가 빠진 것을 확인하면 수강신청 앱에서 계속 새로고침하며
        여석이 생기길 기다려야 합니다!
      </div>

      <NextBtn top="110vh" />

    </div>
  );
}
