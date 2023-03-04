import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz14")}
        style={{ top: "65vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer13() {
  return (
    <div className="App">
      <ProgressBar num="13" />
      <div className="AnsTitle" style={{width: "90%"}}>
        동시 수령이 가능합니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{top: "5vh", fontSize: "18px"}}>
        동시 수령은 가능하지만, 국가장학금과 성적장학금은 
        자신의 한 개 학기 등록금을 초과해서 수혜할 수 없음을 알아두세요! <br/>
      </div>

      <NextBtn />
    </div>
  );
}
