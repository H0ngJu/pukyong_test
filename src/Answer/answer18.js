import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz19")}
        style={{ top: "97vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer18() {
  return (
    <div className="App" style={{height: "113vh"}}>
      <ProgressBar num="18" />
      <div className="AnsTitle" style={{ width: "90%" }}>
        재학생은 10일 동안 최대 5권까지 가능합니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{ top: "3vh", fontSize: "18px", lineHeight: "31px" }}>
        학부생은 최대 5권을 10일까지 대출할 수 있고, 2회 연장할 수 있습니다!
        연장 시 대출기간만큼 반납예정일이 증가합니다. <br/>
        ( 단, 반납예정일이 지났거나 연체도서가 있는 경우, 다른 이용자가 자료를
        예약한 경우에는 연장이 불가능합니다. )
      </div>

      <div className="Ans normal" style={{top: "7vh", fontSize: "18px", lineHeight: "31px"}}>
        참고로 현재 중앙도서관은 리모델링으로 인해 6월 30일까지 자료실 및 열람실 사용이
        불가능하고, 도서 대출도 폐가제로 변경되었습니다. <br/>
        (PC 또는 모바일에서 원하는 도서를 예약 신청한 뒤 도서를 찾아가는 시스템)
      </div>

      <NextBtn />
    </div>
  );
}
