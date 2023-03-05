import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz18")}
        style={{ top: "80vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer17() {
  return (
    <div className="App">
      <ProgressBar num="17" />
      <div className="AnsTitle" style={{width: "90%"}}>
        학생증의 사진은 변경할 수 없습니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{fontSize: "18px"}}>
        학생증 사진은 수능 원서 접수 시 제출한 증명사진으로 들어가며, 변경할 수 없습니다! <br/><br/>
        추가로 모바일 학생증은 시설 출입이나 도서 대출 시 사용되고, 부경대학교 포털 앱에서
        이용 가능합니다. <br/><br/>
        카드형 학생증은 수협에 방문하거나 수협 헤이뱅크 앱을 통해 신청한 뒤
        우편으로 수령 가능한데, 현재 학생증의 디자인에는 사진 부분이 빠졌습니다!
      </div>
      <NextBtn />
    </div>
  );
}
