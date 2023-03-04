import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="NextBtn" onClick={() => navigate("/quiz03")} style={{top: "115vh"}}>
        다음으로
      </button>
    </div>
  );
}

export default function answer02() {
  return (
    <div className="App" style={{height: "130vh"}}>
      <ProgressBar num="2" />
      <div className="AnsTitle" style={{width: "90%"}}>
        수강신청은 학년별로 신청 가능 기간이 다릅니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="bold Ans" style={{ top: "5vh" }}>
        1일차
      </div>
      <div className="normal Ans" style={{ top: "6vh" }}>
        09시 ~ 자정 : 4학년 이상 신청가능 <br />
        13시 ~ 자정 : 3학년 이상 신청가능
      </div>

      <div className="bold Ans" style={{ top: "10vh" }}>
        2일차
      </div>
      <div className="normal Ans" style={{ top: "11vh" }}>
        09시 ~ 자정 : 2학년 이상 신청가능 <br />
        13시 ~ 자정 : 전체학년 신청 가능
      </div>

      <div className="bold Ans" style={{ top: "15vh" }}>
        3일차
      </div>
      <div className="normal Ans" style={{ top: "16vh" }}>
        09시 ~ 자정 : 전체학년 신청 가능, 타과 지정과목 신청가능
      </div>

      <div className="bold Ans" style={{ top: "20vh" }}>
        수강신청 변경 기간
      </div>
      <div className="Ans normal" style={{ top: "21vh" }}>
        개강 후 첫 주는 수강신청 정정기간으로,
        정원이 마감된 경우에도 담당 교수님에게
        연락하여 추가 수강신청이 가능합니다 <br/>
        ( 타학년이 1학년 지정 과목 신청 시, 이 기간에만 신청 가능합니다! )
      </div>

      <NextBtn/>
    </div>
  );
}
