import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz10")}
        style={{ top: "65vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer09() {
  return (
    <div className="App">
      <ProgressBar num="9" />
      <div className="AnsTitle" style={{width: "90%"}}>
        셋 다 괜찮..?습니다!
      <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{top: "5vh", fontSize: "18px", lineHeight: "30px"}}>
        MT같은 교내 행사에 무슨 옷을 입고 와야 하는지 매년 많이들 궁금해하시는
        것 같은데요!! 정말 아무거나 입고 와도 괜찮아요! 나체로 오지만 않으면...
        됩니다! 하핫 😂
      </div>
      <NextBtn />
    </div>
  );
}
