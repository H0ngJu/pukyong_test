import './Home.css';
//import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView } from 'react-device-detect';

// function Title(props) {
//   return (
//       <div>
//           <h2 className="Title">Pt.{props.id} {props.part}</h2>
//       </div>
//   )
// }

// function PartImg(props) {
//   return (
//       <div>
//           <img src={props.url} className="PartImg"></img>
//       </div>
//   )
// }

// function PartNum(props) {
//   return (
//       <div className="PartNum">
//           {props.id} / 7
//       </div>
//   )
// }

// function NextBtn(props) {
//   return (
//       <div>
//           <button className="NextBtn" onClick={() => { }}>다음으로</button>
//       </div>
//   )
// }

// function Home() {
//   return (
//     <div class = "App">
//       <head>
//         <title>부경대 메인 페이지</title>
//       </head>
//         <body>
//         <h1 class = "title">부경대 레벨 테스트</h1>
//         <h4 class = "sub0">당신은 부경 새내기 인가요? 화석인가요?</h4>
//         <h4 class = "sub1">지금 테스트 해보세요!</h4>
//         <div class = "mainimg"><img src ='main.png' alt = "img" class = "mainimg"/></div>
//         <div class = "button"><button type="button" onClick="location.href='http://www.naver.com'"class = "startButton">시작하기</button></div>
//         <h6 class = "name">made by 컴공 21, 22</h6>
//         </body>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div class="Home">
//       <BrowserView>
//         <div class="title">부경대 레벨 테스트</div>
//         <div class="sub0">당신은 부경 새내기 인가요? 화석인가요?</div>
//         <div class="sub1">지금 테스트 해보세요!</div>
//         <div class="mainimg"><img src='main.png' alt='img' class='mainimg'></img></div>
//         <div class='button'><button type='button' onClick="location.href = 'http://www.naver.com'" class="startButton">시작하기</button></div>
//         <div class='name'>made by 컴공 21,</div>
//       </BrowserView>
//       <MobileView>
//         <div class="Title">부경대 레벨 테스트</div>
//         <div class="sub0">당신은 부경 새내기 인가요? 화석인가요?</div>
//         <div class="sub1">지금 테스트 해보세요!</div>
//         <div class="mainimg"><img src='main.png' alt='img' class='mainimg'></img></div>
//         <div class='button'><button type='button' onClick={gotype} class="startButton">시작하기</button></div>
//         <div class='name'>made by 컴공 21,</div>
//       </MobileView>
//     </div>

//   )
// }

export default function Home(){
  // const movePage = useNavigate;

  // function gotype(){
  //   movePage('/type');
  // }

  return (
    <div class="Home">
      <BrowserView>
        <div class="title">부경대 레벨 테스트</div>
        <div class="sub0">당신은 부경 새내기 인가요? 화석인가요?<br/>지금 테스트 해보세요!</div>
        <div class="mainimg"><img src='main.png' alt='img' class='mainimg'></img></div>
        <div class='button'><button type='button' onClick="location.href = 'http://www.naver.com'" class="startButton">시작하기</button></div>
        <div class='name'>made by 컴공 21,</div>
      </BrowserView>
      <MobileView>
        <div class="Title">부경대 레벨 테스트</div>
        <div class="sub0">당신은 부경 새내기 인가요? 화석인가요?<br/>지금 테스트 해보세요!</div>
        <div class="mainimg"><img src='main.png' alt='img' class='mainimg'></img></div>
        <div class='button'><button type='button' onClick="location.href = 'http://www.naver.com'" class="startButton">시작하기</button></div>
        <div class='name'>made by 컴공 21,</div>
      </MobileView>
    </div>
  );
}

//   export default function Home() {
//     // const navigate = useNavigate();
//     // function nextPage() {
//     //     navigate('/user/home');
//     // }

//     return (
//         <div className="App">
//             <Title id="1" part="수강신청" />
//             <PartImg url="https://www.pknu.ac.kr/upload/raonkeditordata/2022/08/18/20220818_102119098_72062.png" />
//             <PartNum id="1" />
//             <NextBtn onChangeMode={() => { }} />
//         </div>
//     );
// }