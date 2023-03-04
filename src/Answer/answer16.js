import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz17")}
        style={{ top: "85vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer16() {
  return (
    <div className="App">
      <ProgressBar num="16" />
      <div className="AnsTitle" style={{width: "90%"}}>
        캠퍼스 내에 치과는 없습니다!
        <img className="titleImg" src="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102123489_18337.png"></img>
      </div>

      <div className="Ans normal" style={{top: "3vh", fontSize: "18px", lineHeight: "32px"}}>
      여행사 : 가온관 1층 서우여행사 <br/>
      구두수선소 : 위드센터 대연구두수선소 <br/>
      미용실 : 가온관 1층 부경대커트전문점 <br/><br/>
      이 외에도 학교에는 안경점, 사진관, 전자점, 수상레저관 등 다양한 복지시설이
      존재하니, 밑의 링크를 참고하여 교내 시설들을 알뜰하게 이용해보세요! <br/><br/>
      <a href="https://www.pknu.ac.kr/main/261" className="link">후생복지시설 더 알아보기</a>
      </div>
      <NextBtn />
    </div>
  );
}
