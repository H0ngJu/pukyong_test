import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/type06")}
        style={{ top: "110vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer14() {
  return (
    <div className="App" style={{height: "120vh"}}>
      <ProgressBar num="14" />
      <div className="AnsTitle" style={{width: "90%"}}>
      국가장학금 2유형은 후지급 형태입니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans bold" style={{top: "3vh", fontSize: "20px"}}>
        성적장학금
      </div>
      <div className="Ans normal" style={{top: "3vh", fontSize: "18px"}}>
        등록금 고지서에서 감면
      </div>

      <div className="Ans bold" style={{top: "8vh", fontSize: "20px"}}>
        국가장학금 1유형
      </div>
      <div className="Ans normal"  style={{top: "8vh", fontSize: "18px"}}>
        
        등록금 수납기간 이전에 학자금 지원구간이 산정된다면 분위에 따라 선감면되고,
        만약 지원구간 산정이 늦어진다면 학기말에 후지급되는 형태입니다.
      </div>

      <div className="Ans bold" style={{top: "13vh", fontSize: "20px"}}>
        국가장학금 2유형 (교내장학금)
      </div>
      <div className="Ans normal"  style={{top: "13vh", fontSize: "18px"}}>
        학기말 또는 방학 중 후지급 <br/>
        국가장학금을 신청하고 당해 학기 등록금을 납부한 재학생 중에서,
        8분위지만 평점평균이 낮았거나 9분위에 해당하여 전액 장학금을 받지 못한 학생들에게
        기준등록금액의 일부를 후지급 형태로 입금해줍니다! <br/><br/>
      <a href="https://www.pknu.ac.kr/main/163?action=view&no=709568" className="link">교내장학금 더 알아보기</a>
      </div>

      <NextBtn />
    </div>
  );
}
