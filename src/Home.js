import './Home.css';

function Home() {
  return (
    <div>
      <head>
        <title>부경대 메인 페이지</title>
      </head>
        <body>
        <h1 class = "title">부경대 레벨 테스트</h1>
        <h4 class = "sub0">당신은 부경 새내기 인가요? 화석인가요?</h4>
        <h4 class = "sub1">지금 테스트 해보세요!</h4>
        <div class = "mainimg"><img src ='main.png' alt = "img" class = "mainimg"/></div>
        <div class = "button"><button type="button" onClick="location.href='http://www.naver.com'"class = "startButton">시작하기</button></div>
        <h6 class = "name">made by 컴공 21, 22</h6>
        </body>
    </div>
  );
}

export default Home;
