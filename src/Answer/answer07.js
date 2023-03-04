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
        style={{ top: "100vh" }}>
        다음으로
      </button>
    </div>
  );
}
export default function answer07() {
  return (
    <div className="App" style={{height: "110vh"}}>
      <ProgressBar num="7" />
      <div className="AnsTitle" style={{width: "90%"}}>
        강의평가 - 성적확인 - 이의신청 순입니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
        </div>

      <div className="Ans bold" style={{ top: "5vh", fontSize: "20px" }}>
        2022년 2학기 공지를 참고해보세요!
      </div>
      
      <div className="Ans normal" style={{ top: "8vh" }}>
        강의평가 : 12. 12 ~ 12. 30 <br/>
        기말고사 : 12. 14 ~ 12. 20 <br/>
        성적입력 : 12. 14 ~ 12. 27 <br/>
        성적조회 : 12. 14 ~ 12. 30 <br/>
        성적 이의신청 및 정정기간: 12. 28 ~ 12. 30
      </div>

      <div className="Ans normal" style={{ top: "12vh" }}>
        보통은 기말고사 주부터 강의평가를 시작하여 기말고사 후 일주일까지는
        성적입력기간, 성적입력 이후 3일까지가 이의신청 기간입니다.<br/>
        이의신청 기간이 지나면 성적이 확정되고, 등수는 며칠 뒤에 확인할 수 있습니다! <br/>
        강의평가 미실시자는 성적 확인이 불가능하니 잊지 마세요!!
      </div>
  
      <NextBtn />
    </div>
  );
}
