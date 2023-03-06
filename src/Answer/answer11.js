import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/type05")}
        style={{ top: "103vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer11() {
  return (
    <div className="App" style={{height: "115vh"}}>
      <ProgressBar num="11" />
      <div className="AnsTitle" style={{ width: "90%" }}>
        동아리 가입 개수 제한은 없습니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{top: "3vh", fontSize: "18px", lineHeight: "30px"}}>
        동아리 가입 개수에 제한은 없으며, 각 동아리의 지원 시기 및
        모집 인원 등은 에브리타임의 게시물을 검색하여 찾아보면 됩니다. <br />
        보통 2월 말에서 3월 초쯤에 안내글들이 올라오니 가입하고 싶은 동아리가
        있다면 미리 찾아보는 게 좋겠죠!
      </div>

      <div className="Ans bold" style={{top: "9vh"}}>
        동아리 소개 한마당 (3월 14일)
      </div>
      <div className="Ans normal" style={{top: "11vh", fontSize: "18px", lineHeight: "30px"}}>
        잔디광장에서 중앙동아리들이 안내 부스를 운영하며
        동아리를 설명하고 안내해주는 행사입니다. <br />
        들어가고 싶은 동아리가 있다면 미리 신청하는 게 가장 좋겠지만,
        어딜 가야할 지 고민된다면 이때 둘러보고 결정하는 건 어떨까요!
      </div>
      <NextBtn />
    </div>
  );
}
