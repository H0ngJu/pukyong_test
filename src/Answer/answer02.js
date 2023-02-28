import "./Answer.css";
import { useNavigate } from "react-router-dom";
import { ProgressBar } from "./answer01";

function NextBtn() {
  const navigate = useNavigate();
  return (
    <div>
      <button className="NextBtn" onClick={() => navigate("/quiz03")}>
        다음으로
      </button>
    </div>
  );
}

export default function answer02() {
  return (
    <div className="App">
      <ProgressBar num="2" />
      <div
        className="AnsTitle"
        style={{
          width: "300px",
          left: "calc(50% - 300px/2)",
        }}
      >
        수강신청은 학년별로 신청 가능 기간이 다릅니다!
      </div>
      {/* <div className="Ans bold">4학년 : 첫째날 아침 9시부터</div> */}
      <div
        className="Ans bold"
        style={{
          top: "10vh",
          width: "280px",
          left: "calc(50% - 280px/2)",
        }}
      >
        4학년 : 첫째날 아침 9시부터
      </div>

      <div
        className="Ans bold"
        style={{
          top: "12vh",
          width: "280px",
          left: "calc(50% - 280px/2)",
        }}
      >
        3학년 : 첫째날 오후 1시부터
      </div>

      <div
        className="Ans bold"
        style={{
          top: "14vh",
          width: "280px",
          left: "calc(50% - 280px/2)",
        }}
      >
        2학년 : 둘째날 아침 9시부터
      </div>

      <div
        className="Ans bold"
        style={{
          top: "16vh",
          width: "320px",
          left: "calc(50% - 320px/2)",
        }}
      >
        둘째날 오후 1시 : 타과 지정과목 제외 전 학년 신청 가능
      </div>

      <div
        className="Ans bold"
        style={{
          top: "20vh",
          width: "280px",
          left: "calc(50% - 280px/2)",
        }}
      >
        셋째날 : 타과 지정과목 포함 전 학년 신청 가능
      </div>

      <div
        className="Ans normal"
        style={{
          top: "24vh",
          width: "310px",
          left: "calc(50% - 310px/2)",
        }}
      >
        (단, 타학년이 1학년 지정 과목 신청 시 개강 이후 수강 정정 기간에 신청
        가능)
      </div>
      <div
        className="Ans normal"
        style={{
          top: "26vh",
          width: "330px",
          left: "calc(50% - 330px/2)",
        }}
      >
        수강신청 변경 기간 : <br />
        개강 후 일주일동안은 수강신청 정정기간으로,
        <br />
        정원이 마감된 경우에도 담당 교수님에게 <br />
        연락하여 추가 수강신청이 가능합니다!
      </div>

      <NextBtn />
    </div>
  );
}
