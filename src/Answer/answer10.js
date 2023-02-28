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
        style={{ top: "80vh" }}
      >
        다음으로
      </button>
    </div>
  );
}
export default function answer10() {
  return (
    <div className="App">
      <ProgressBar num="10" />
      <div className="AnsTitle">화이트 캠퍼스는</div>

      <NextBtn />
    </div>
  );
}
