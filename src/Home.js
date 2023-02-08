import './Home.css';
//import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';

export default function Home(){
  // const movePage = useNavigate;

  // function gotype(){
  //   movePage('/type');
  // }

  return (
    <div className="Home">
      <BrowserView>
        <div className="title">부경대 레벨 테스트</div>
        <div className="sub0">당신은 부경 새내기 인가요? 화석인가요?<br/>지금 테스트 해보세요!</div>
        <div className="mainimg"><img src='main.png' alt='img' className='mainimg'></img></div>
        <div className="starButton"><button type='button' className="startButton">시작하기</button></div>
        <div className="name">made by 컴공 21,</div>
      </BrowserView>
      <MobileView>
        <div className="m_title">부경대 레벨 테스트</div>
        <div className="m_sub0">당신은 부경 새내기 인가요? 화석인가요?<br/>지금 테스트 해보세요!</div>
        <div className="m_mainimg"><img src='main.png' alt='img' className='mainimg'></img></div>
        <div className="m_startButton"><button type='button' className="startButton">시작하기</button></div>
        <div className="m_name">made by 컴공 21,</div>
      </MobileView>
    </div>
  );
}