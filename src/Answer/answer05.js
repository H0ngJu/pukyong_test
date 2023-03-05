import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz06")}
        style={{ top: "85vh" }}>
        다음으로
      </button>
    </div>
  );
}
export default function answer05() {
  return (
    <div className="App">
      <ProgressBar num="5" />
      <div className="AnsTitle" style={{width: "90%"}}>
        '21세기 리더십'은 필수 교양이 아닙니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
        </div>

      <div
        className="Ans bold"
        style={{ top: "5vh" }}>
        2023학년도 기준 필수 교양
      </div>

      <div className="Ans normal" style={{ top: "3vh" }}>
        <ul style={{ width: "170px", fontSize: "20px", lineHeight: "35px" }}>
          <li>대학 생활과 진로</li>
          <li>부경 인성 세미나</li>
          <li>대학영어</li>
          <li>사유와 표현</li>
          <li>컴퓨팅 사고</li>
        </ul>
      </div>

      <div
        className="Ans normal"
        style={{ top: "8vh", fontSize: "20px"}}>
        '21세기 리더십'은 교양 교과목 이름이었습니다 ^-^
      </div>

      <NextBtn />
    </div>
  );
}
