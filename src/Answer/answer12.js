import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz13")}
        style={{ top: "70vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer12() {
  return (
    <div className="App">
      <ProgressBar num="12" />
      <div className="AnsTitle" style={{ width: "90%" }}>
        아닙니다. 0원 고지서 제출이 필요합니다!
        <img
          className="titleImg"
          src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"
        ></img>
      </div>

      <div
        className="Ans normal"
        style={{ top: "5vh", fontSize: "18px", lineHeight: "30px" }}
      >
        등록금 고지서에 0원으로 조회되어도 은행 어플을 사용하거나 은행에 직접
        방문하여 0원 고지서를 제출해야 합니다. 주의하세요! <br />
        아니면 자신의 가상 계좌로 총학생회비 8000원만 납부해도 괜찮습니다!
      </div>
      <NextBtn />
    </div>
  );
}
