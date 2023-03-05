import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn" onClick={() => navigate("/quiz04")}
        style={{ top: "85vh" }}>
        다음으로
      </button>
    </div>
  );
}
export default function answer03() {
  return (
    <div className="App">
      <ProgressBar num="3" />
      <div
        className="AnsTitle" style={{width: "90%"}}>
        백경이의 수강 가능 학점은 21학점입니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div
        className="Ans normal"
        style={{ top: "5vh", fontSize: "20px", lineHeight: "32px"}}>
        직전학기의 이수가능학점 18학점 중<br />
        17학점을 수강하였으므로 1학점 이월<br />
        가능하고, 성적 평점평균이 3.75 이상<br />
        이므로 추가로 2학점을 이월 가능합니다.
      </div>

      <div
        className="Ans normal"
        style={{ top: "9vh", fontSize: "20px" }}>
        18 + 1 + 2 = 21<br />
        따라서 백경이는 이번 학기에 최대
        21학점까지 수강이 가능합니다!
      </div>

      <div
        className="Ans normal"
        style={{ top: "12vh", fontSize: "18px" }}>
        (이월은 최대 한 학기까지만 가능합니다 !)
      </div>

      <NextBtn />
    </div>
  );
}
