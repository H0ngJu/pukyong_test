import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  //  function gotype(){
  //    movePage('/type');
  //  }

  return (
    <div className="Home">
      <div className="title">부경대 레벨 테스트</div>
      <div className="sub0">
        당신은 부경 새내기 인가요? 화석인가요?
        <br />
        지금 테스트 해보세요!
      </div>
      <div className="mainimg">
        <img src="main.png" alt="img" className="mainimg"></img>
      </div>
      <button
        type="button"
        onClick={() => navigate("/type01")}
        className="startButton"
      >
        시작하기
      </button>
      <div className="name">made by 컴공 21, 22</div>
    </div>
  );
}
