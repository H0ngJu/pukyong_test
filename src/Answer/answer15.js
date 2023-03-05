import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz16")}
        style={{ top: "70vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer15() {
  return (
    <div className="App">
      <ProgressBar num="15" />
      <div className="AnsTitle" style={{width: "90%"}}>
        고래는 학교에 있었던 적이 없습니다! 
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{fontSize: "18px", top: "3vh"}}>
        장보고관 앞의 연못에 원래는 철갑상어가 있었고 지금은 거북이가
        살고있습니다! 그리고 공사 전 옛날 청운관에는 부경사우르스라는
        공룡 화석이 있었답니다 ㅋ.ㅋ <br/><br/>
        혹시 백경이를 떠오르셨다면... 저런...! 🤣
      </div>
      <NextBtn />
    </div>
  );
}
