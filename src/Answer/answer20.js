import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/result01")}
        style={{ top: "85vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer20() {
  return (
    <div className="App">
      <ProgressBar num="20" />
      <div className="AnsTitle" style={{width: "90%"}}>
        정상 출석입니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{top:"3vh", fontSize: "18px", lineHeight: "30px"}}>
        동영상의 시간만큼 접속해있기만 하면 모두 정상 출석으로 인정됩니다.<br/>
        창을 오래 켜놓았다고 해서 불이익은 없고, 혹시 강의를 배속으로 들어서
        수업 시간을 다 못 채웠을 경우에는 남은 시간만큼 창을 켜놓으면 됩니다. <br/><br/>
        추가로 출석 마감 당일 자정 전에 들어가서 창을 끄지 않고 수업 시간만큼 유지하면,
        수업을 듣다 다음날로 넘어가더라도 출석으로 인정됩니다 !
      </div>
      <NextBtn />
    </div>
  );
}
