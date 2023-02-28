import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="NextBtn"
        onClick={() => navigate("/quiz10")}
        style={{ top: "80vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer09() {
  return (
    <div className="App">
      <ProgressBar num="9" />
      <div className="AnsTitle"></div>
      <div>
        MT같은 교내 행사에 무슨 옷을 입고 와야 하는지 매년 많이들 궁금해하시는
        것 같습니다. 정말 아무거나 입고 와도 괜찮아요! 나체로 오지만 않으면
        됩니당 😂
      </div>
      <NextBtn />
    </div>
  );
}
