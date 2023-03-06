import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz20")}
        style={{ top: "90vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer19() {
  return (
    <div className="App" style={{height: "105vh"}}>
      <ProgressBar num="19" />
      <div className="AnsTitle" style={{width: "90%"}}>
        A13 누리관의 구 건물명칭은 2호관입니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{top: "3vh", fontSize: "18px", lineHeight: "31px"}}>
        현재 우리 학교는 A13과 같은 건물 번호와 318과 같은 강의실 번호를
        사용하고 있는데요. 옛날에는 2호관, 4호관같은 건물 명칭을 사용했답니다!<br/>
        혹시 강의실 번호가 네 자리라면 구 명칭의 잔재이니 앞의 한자리는 무시하시면 됩니다 ㅎㅅㅎ
      </div>

      <div className="Ans normal" style={{top: "7vh", fontSize: "18px", lineHeight: "31px"}}>
        참고로 호연관은 6호관, 나래관은 인문사회관, 충무관은 4호관이었습니다! <br/>
        이것까지 맞추셨다면... 정말 부경대에 진심이시군요...
      </div>
      <NextBtn />
    </div>
  );
}
