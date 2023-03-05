import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz11")}
        style={{ top: "130vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer10() {
  return (
    <div className="App" style={{height: "140vh"}}>
      <ProgressBar num="10" />
      <div className="AnsTitle" style={{ width: "90%" }}>
        화이트캠퍼스는 교내 행사 이름이 아닙니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

        <div className="Ans bold" style={{top: "3vh"}}>핑크캠퍼스</div>
        <div className="Ans normal" style={{top: "4vh"}}>
          행사 시기 : 3월 말에서 4월 초 (벚꽃 만개 시기에 맞춰서) <br/>
          행사 내용 : 각 학과와 단과대, 총학생회에서 백경광장에 이벤트 부스를
          진행하는 행사에요. 부스에서는 간단한 이벤트나 음식 나눔, 소품 만들기 등을
          진행하고 이 외에도 동아리의 공연이나 푸드트럭 등이 운영됩니다!
        </div>

        <div className="Ans bold" style={{top: "10vh"}}>대동제</div>
        <div className="Ans normal" style={{top: "11vh"}}>
          행사 시기 : 5월 중순 (올해는 5.16 ~ 5.19) <br/>
          행사 내용 : 대동제는 교내 행사 중 가장 큰 규모의 행사입니다. 
          낮에는 핑크캠퍼스와 비슷하게 학과별 부스와 버스킹 공연도 하고,
          저녁에는 가수를 초청하여 잔디광장에서 공연을 진행합니다! 
        </div>

        <div className="Ans bold" style={{top: "17vh"}}>옐로우캠퍼스</div>
        <div className="Ans normal" style={{top: "18vh"}}>
          행사 시기 : 10월 말 <br/>
          행사 내용 : 핑크캠퍼스와 비슷하게 부스 운영이나 소규모 공연 등이 
          진행됩니다. 규모는 위의 두 행사보다 작아요!
        </div>

      <NextBtn />
    </div>
  );
}
