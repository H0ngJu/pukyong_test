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
        style={{ top: "80vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer05() {
  return (
    <div className="App">
      <ProgressBar num="5" />
      <div className="AnsTitle">'21세기 리더십'은 필수 교양이 아닙니다!</div>
      <div
        className="Ans bold"
        style={{
          top: "10vh",
          width: "300px",
          left: "calc(50% - 300px/2)",
        }}
      >
        2023학년도 기준 필수 교양
      </div>
      <div
        className="Ans normal"
        style={{
          top: "11vh",
        }}
      >
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
        style={{
          top: "14vh",
          fontSize: "18px",
        }}
      >
        참고 : '21세기 리더십'은 교양 교과목 이름이었습니다 ^.^
      </div>
      <NextBtn />
    </div>
  );
}
