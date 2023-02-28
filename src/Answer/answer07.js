import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz08")}
        style={{ top: "80vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer07() {
  return (
    <div className="App">
      <ProgressBar num="7" />
      <div className="AnsTitle">강의평가 - 성적확인 - 이의신청 순입니다!</div>
      <div>
        2022년 2학기 공지를 참고하세요! 참고로 강의평가 미실시자는 성적 확인이
        불가능합니다.
      </div>
      <div>
        강의평가 실시기간: 2022. 12. 12.(월) ~ 12. 30.(금) 성적조회 기간: 2022.
        12. 14.(수) ~ 12. 30.(금) 성적 이의신청 및 정정기간: 2022. 12. 28.(수) ~
        12. 30.(금)
      </div>

      <NextBtn />
    </div>
  );
}
